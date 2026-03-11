# Chat 85 — SEO Technical Handoff

**Date:** 2026-03-11
**Scope:** Meta tags, Open Graph, Twitter Card, sitemap.xml, robots.txt

---

## Files Changed

### MODIFIED — `app/layout.tsx`
Added full `metadata` export replacing the partial one. Key additions:
- `metadataBase: new URL("https://www.christopherhoole.online")`
- `openGraph.siteName: "Christopher Hoole"`
- `openGraph.images`: `/og-image.jpg` at 1200×630
- `twitter.card: "summary_large_image"`

### CREATED — `app/sitemap.ts`
Next.js 14 native sitemap. Returns one entry:
- URL: `https://www.christopherhoole.online`
- changeFrequency: `monthly`
- priority: `1`
Resolves at `/sitemap.xml` after deploy.

### CREATED — `app/robots.ts`
Next.js 14 native robots file. Allows all crawlers, links to sitemap.
Resolves at `/robots.txt` after deploy.

### CREATED — `public/og-image.jpg`
Generated with Python + Pillow from `public/chris_headshot_1.jpg` (800×800 source).
- Crop: square source → aspect-ratio letterbox to 1.905:1
- Resize: 1200×630 LANCZOS
- Saved JPEG quality 90

---

## Metadata Values

```typescript
{
  title: "Christopher Hoole — Senior Google Ads Specialist",
  description: "Senior Google Ads Specialist with 16 years experience. Builder of A.C.T — an AI-powered Google Ads optimisation platform.",
  metadataBase: new URL("https://www.christopherhoole.online"),
  openGraph: {
    title: "Christopher Hoole — Senior Google Ads Specialist",
    description: "Senior Google Ads Specialist with 16 years experience. Builder of A.C.T — an AI-powered Google Ads optimisation platform.",
    url: "https://www.christopherhoole.online",
    siteName: "Christopher Hoole",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "..." }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christopher Hoole — Senior Google Ads Specialist",
    description: "...",
    images: ["/og-image.jpg"],
  },
}
```

---

## Build Output

```
✓ Compiled successfully in 7.4s
✓ Generating static pages (9/9)

Route (app)
├ ○ /
├ ○ /robots.txt
├ ○ /sitemap.xml
├ ○ /privacy-policy
└ ○ /terms
```

Zero errors. ESLint skipped (not installed) — this is a pre-existing condition, not introduced by this chat.

---

## Post-Deploy Verification Steps

1. Visit `https://www.christopherhoole.online/sitemap.xml` — expect XML with homepage entry.
2. Visit `https://www.christopherhoole.online/robots.txt` — expect allow all + sitemap link.
3. Paste URL into https://www.opengraph.xyz — expect title, description and headshot image.
4. Submit sitemap in Google Search Console: `https://www.christopherhoole.online/sitemap.xml`

---

## Notes

- `metadataBase` must use `www.` subdomain to match canonical URL
- No component files were modified
- `next.config.js` was not touched
