import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import TheProblem from "@/components/TheProblem";
import TheDifference from "@/components/TheDifference";
import WorkHistory from "@/components/WorkHistory";
import Skills from "@/components/Skills";
import WhatACTDoes from "@/components/WhatACTDoes";
import WhyDifferent from "@/components/WhyDifferent";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <AboutMe />
      <TheProblem />
      <TheDifference />
      <WorkHistory />
      <Skills />
      <WhatACTDoes />
      <WhyDifferent />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
