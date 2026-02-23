"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;

    const wrap = containerRef.current;
    let W = wrap.clientWidth;
    let H = wrap.clientHeight;

    // @ts-ignore - Three.js loaded via CDN
    const THREE = window.THREE;
    if (!THREE) {
      console.error("Three.js not loaded");
      return;
    }

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    wrap.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(W / -2, W / 2, H / 2, H / -2, 0.1, 1000);
    camera.position.z = 1;

    const gu = {
      time: { value: 0 },
      dTime: { value: 0 },
      aspect: { value: W / H },
    };

    // ---- BLOB / POINTER (EXACT WIREFRAME CODE) ----
    const POINTER_RADIUS = 0.28;
    const POINTER_DURATION = 2.5;

    const blobUniforms = {
      pointer: { value: new THREE.Vector2().setScalar(10) },
      pointerDown: { value: 1 },
      pointerRadius: { value: POINTER_RADIUS },
      pointerDuration: { value: POINTER_DURATION },
    };

    wrap.addEventListener('mousemove', (e) => {
      const rect = wrap.getBoundingClientRect();
      blobUniforms.pointer.value.x = ((e.clientX - rect.left) / W) * 2 - 1;
      blobUniforms.pointer.value.y = -((e.clientY - rect.top) / H) * 2 + 1;
    });

    wrap.addEventListener('mouseleave', () => {
      blobUniforms.pointer.value.setScalar(10);
    });

    // ---- RENDER TARGETS ----
    let rtRead = new THREE.WebGLRenderTarget(W, H, {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
    });
    let rtWrite = rtRead.clone();

    // Blob shader: EXACT WIREFRAME VERSION with angle-based noise
    const blobMat = new THREE.ShaderMaterial({
      uniforms: {
        dTime: gu.dTime,
        aspect: gu.aspect,
        pointer: blobUniforms.pointer,
        pointerDown: blobUniforms.pointerDown,
        pointerRadius: blobUniforms.pointerRadius,
        pointerDuration: blobUniforms.pointerDuration,
        fbTexture: { value: null },
        time: gu.time,
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: `
        uniform float dTime, aspect, pointerDown, pointerRadius, pointerDuration, time;
        uniform vec2 pointer;
        uniform sampler2D fbTexture;
        varying vec2 vUv;

        float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123); }
        float noise(vec2 p){
          vec2 i=floor(p); vec2 f=fract(p); f=f*f*(3.0-2.0*f);
          float a=hash(i); float b=hash(i+vec2(1.,0.)); float c=hash(i+vec2(0.,1.)); float d=hash(i+vec2(1.,1.));
          return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);
        }

        void main() {
          float rVal = texture2D(fbTexture, vUv).r;
          rVal -= clamp(dTime / pointerDuration, 0., 0.05);
          rVal  = clamp(rVal, 0., 1.);

          float f = 0.0;
          if (pointerDown > 0.5) {
            vec2 uv     = (vUv - 0.5) * 2.0 * vec2(aspect, 1.0);
            vec2 mouse  = pointer * vec2(aspect, 1.0);
            vec2 toMouse = uv - mouse;
            float angle  = atan(toMouse.y, toMouse.x);
            float dist   = length(toMouse);
            float nv     = noise(vec2(angle*3.0 + time*0.5, dist*5.0));
            float nv2    = noise(vec2(angle*5.0 - time*0.3, dist*3.0 + time));
            float rv     = 0.7 + nv*0.5 + nv2*0.3;
            float or2    = pointerRadius * rv;
            f = 1.0 - smoothstep(or2*0.05, or2*1.2, dist);
            f *= 0.8 + nv*0.2;
          }
          rVal += f * 0.25;
          rVal  = clamp(rVal, 0., 1.);
          gl_FragColor = vec4(rVal, rVal, rVal, 1.0);
        }
      `,
    });

    const blobMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), blobMat);
    const blobCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    function renderBlob() {
      blobMat.uniforms.fbTexture.value = rtRead.texture;
      renderer.setRenderTarget(rtWrite);
      renderer.render(blobMesh, blobCamera);
      renderer.setRenderTarget(null);
      const tmp = rtRead;
      rtRead = rtWrite;
      rtWrite = tmp;
    }

    // ---- TEXTURES ----
    function loadTex(img: HTMLImageElement) {
      const t = new THREE.Texture(img);
      t.needsUpdate = true;
      return t;
    }

    function fitGeo(iw: number, ih: number) {
      const ia = iw / ih, ca = W / H;
      let pw, ph;
      if (ia > ca) {
        pw = W;
        ph = W / ia;
      } else {
        ph = H;
        pw = H * ia;
      }
      return new THREE.PlaneGeometry(pw, ph);
    }

    const imgChris = new Image();
    imgChris.src = "/chris_headshot_1.jpg";
    const imgRobot = new Image();
    imgRobot.src = "/ACT_headshot_1.jpg";

    let loadedCount = 0;
    const onImageLoad = () => {
      loadedCount++;
      if (loadedCount === 2) {
        initScene();
        setIsLoading(false);
      }
    };
    imgChris.onload = onImageLoad;
    imgRobot.onload = onImageLoad;

    function initScene() {
      const baseTex = loadTex(imgChris);
      const revealTex = loadTex(imgRobot);

      // Layer 1: Christopher - always visible
      const baseMesh = new THREE.Mesh(
        fitGeo(imgChris.naturalWidth || W, imgChris.naturalHeight || H),
        new THREE.MeshBasicMaterial({ map: baseTex, transparent: true })
      );
      baseMesh.position.z = 0.0;
      scene.add(baseMesh);

      // Layer 2: Animated liquid bg - visible only in blob zone
      const bgMat = new THREE.ShaderMaterial({
        uniforms: {
          texBlob: { value: null },
          time: gu.time,
        },
        vertexShader: `
          varying vec2 vUv;
          varying vec4 vPosProj;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            vPosProj = gl_Position;
          }
        `,
        fragmentShader: `
          uniform sampler2D texBlob;
          uniform float time;
          varying vec2 vUv;
          varying vec4 vPosProj;

          float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
          float noise(vec2 p){vec2 i=floor(p);vec2 f=fract(p);f=f*f*(3.-2.*f);float a=hash(i);float b=hash(i+vec2(1.,0.));float c=hash(i+vec2(0.,1.));float d=hash(i+vec2(1.,1.));return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);}
          float fbm(vec2 p){float v=0.;float a=0.5;for(int i=0;i<4;i++){v+=a*noise(p);p*=2.1;a*=0.3;}return v;}

          void main() {
            vec2 blobUV = ((vPosProj.xy / vPosProj.w) + 1.0) * 0.5;
            float bd = texture2D(texBlob, blobUV).r;
            if (bd < 0.02) discard;

            vec2 uv     = vUv * 3.5;
            float d     = fbm(vUv * 2.0 + time * 0.2);
            vec2 wuv    = uv + (d - 0.5) * 0.7;
            float n     = fbm(wuv);
            float sm    = smoothstep(0.1, 0.9, sin(n * 3.0));
            vec3 c1     = mix(vec3(0.05,0.08,0.18), vec3(0.09,0.13,0.28), sm);
            float lm    = 1.0 - smoothstep(0.49, 0.51, fract(n * 15.0));
            vec3 col    = mix(c1, vec3(0.13,0.18,0.38), lm);
            gl_FragColor = vec4(col, 1.0);
          }
        `,
        transparent: true,
      });
      const bgMesh = new THREE.Mesh(new THREE.PlaneGeometry(W, H), bgMat);
      bgMesh.position.z = 0.05;
      scene.add(bgMesh);

      // Layer 3: A.C.T robot - visible only in blob zone
      const revealMat = new THREE.ShaderMaterial({
        uniforms: {
          map: { value: revealTex },
          texBlob: { value: null },
        },
        vertexShader: `
          varying vec2 vUv;
          varying vec4 vPosProj;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            vPosProj = gl_Position;
          }
        `,
        fragmentShader: `
          uniform sampler2D map;
          uniform sampler2D texBlob;
          varying vec2 vUv;
          varying vec4 vPosProj;
          void main() {
            vec2 blobUV = ((vPosProj.xy / vPosProj.w) + 1.0) * 0.5;
            float bd = texture2D(texBlob, blobUV).r;
            if (bd < 0.02) discard;
            gl_FragColor = texture2D(map, vUv);
          }
        `,
        transparent: true,
      });
      const revealMesh = new THREE.Mesh(
        fitGeo(imgRobot.naturalWidth || W, imgRobot.naturalHeight || H),
        revealMat
      );
      revealMesh.position.z = 0.1;
      scene.add(revealMesh);

      function onResize() {
        W = wrap.clientWidth;
        H = wrap.clientHeight;
        camera.left = W / -2;
        camera.right = W / 2;
        camera.top = H / 2;
        camera.bottom = H / -2;
        camera.updateProjectionMatrix();
        renderer.setSize(W, H);
        gu.aspect.value = W / H;
        baseMesh.geometry.dispose();
        baseMesh.geometry = fitGeo(imgChris.naturalWidth || W, imgChris.naturalHeight || H);
        revealMesh.geometry.dispose();
        revealMesh.geometry = fitGeo(imgRobot.naturalWidth || W, imgRobot.naturalHeight || H);
        bgMesh.geometry.dispose();
        bgMesh.geometry = new THREE.PlaneGeometry(W, H);
      }
      window.addEventListener("resize", onResize);

      const clock = new THREE.Clock();
      let t = 0;
      function animate() {
        requestAnimationFrame(animate);
        const dt = clock.getDelta();
        t += dt;
        gu.time.value = t;
        gu.dTime.value = dt;

        renderBlob();

        bgMat.uniforms.texBlob.value = rtRead.texture;
        revealMat.uniforms.texBlob.value = rtRead.texture;

        renderer.render(scene, camera);
      }
      animate();
    }

    return () => {
      if (wrap && renderer.domElement) {
        wrap.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen bg-dark flex items-center justify-center gap-12 px-6 md:px-20 relative overflow-hidden">
      <div className="flex-1 max-w-[520px] z-10 relative">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-6 h-px bg-primary"></div>
          <h1 className="font-mono text-[20px] font-bold uppercase tracking-[2.5px] text-primary m-0">
            Senior Google Ads Specialist
          </h1>
        </div>
        <div className="text-[52px] font-bold text-[#f8fafc] leading-[1.1] mb-5 tracking-tight font-mono">
          I&apos;m <span className="text-primary">Christopher Hoole</span>
        </div>
        <h2 className="text-[38px] font-bold text-[#f8fafc] leading-[1.1] mb-6 tracking-tight font-mono">
          Google Ads, Managed with <span className="text-primary">AI Precision</span>.
        </h2>
        <p className="text-body-dark mb-9">
          16 years of paid ads experience.
          <br />
          One proprietary AI engine.
          <br />
          Most managers work the same way, so I built my own AI engine.
        </p>
        <div className="flex gap-4 items-center mb-6">
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) {
                const navHeight = 56;
                const targetPosition = el.offsetTop - navHeight;
                window.scrollTo({ top: targetPosition, behavior: "smooth" });
              }
            }}
            className="bg-primary text-white px-7 py-3.5 font-mono text-[11px] uppercase tracking-widest rounded hover:bg-blue-600 transition-colors"
          >
            Let&apos;s Discuss Your Paid Ads
          </button>
          <button className="text-[#475569] font-mono text-[11px] uppercase tracking-widest border border-border-dark px-7 py-3.5 rounded bg-transparent hover:border-primary hover:text-primary transition-colors">
            See How It Works ↓
          </button>
        </div>
        <p className="font-mono text-[10px] text-[#334155] tracking-wide">
          <span className="text-primary">Maximum 4 clients.</span> Currently accepting agency partnerships.
        </p>
      </div>
      <div className="relative w-[494px] h-[598px] flex-shrink-0 z-10 rounded overflow-hidden cursor-crosshair">
        <div ref={containerRef} className="absolute inset-0 w-full h-full"></div>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center font-mono text-[11px] text-border-dark uppercase tracking-wide z-5 bg-dark">
            Loading...
          </div>
        )}
        <div className="absolute bottom-[-32px] left-1/2 transform -translate-x-1/2 font-mono text-[10px] text-border-dark tracking-wide uppercase whitespace-nowrap">
          ↑ hover to reveal A.C.T
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="font-mono text-[18px] text-white tracking-[2px]">Scroll</div>
        <div className="w-[3px] h-10 bg-gradient-to-b from-primary to-transparent animate-pulse-slow"></div>
      </div>
    </section>
  );
}
