import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/lib/smooth-scroll";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Doctors } from "@/components/site/Doctors";
import { WhatWeTreat } from "@/components/site/WhatWeTreat";
import { WhyUs } from "@/components/site/WhyUs";
import { BookCTA } from "@/components/site/BookCTA";
import { Testimonials } from "@/components/site/Testimonials";
import { Visit } from "@/components/site/Visit";
// import { Blog } from "@/components/site/Blog";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Doctors />
        <WhatWeTreat />
        <WhyUs />
        <BookCTA />
        <Testimonials />
        <Visit />
        {/* <Blog /> */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

