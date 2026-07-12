import { Reveal } from "./Reveal";

const conditions = [
  "Migraine & Headaches",
  "Epilepsy & Seizures",
  "Stroke",
  "Parkinson's Disease",
  "Alzheimer's & Dementia",
  "Multiple Sclerosis",
  "Sleep Disorders",
  "Neuropathy",
  "Vertigo",
  "Spine Disorders",
  "Brain Tumors",
  "Movement Disorders",
];

export function WhatWeTreat() {
  return (
    <section id="treat" className="relative py-10 md:py-16 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-primary/90 mb-4">— Conditions</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] max-w-3xl">
            What we <span className="italic text-gradient">treat.</span>
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 md:mt-20 space-y-4">
        <div className="flex overflow-hidden">
          <div className="flex gap-3 md:gap-4 animate-marquee whitespace-nowrap shrink-0">
            {[...conditions, ...conditions].map((c, i) => (
              <span key={i} className="glass rounded-full px-4 md:px-6 py-2 md:py-3 text-base md:text-lg font-display">
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden">
          <div className="flex gap-3 md:gap-4 animate-marquee whitespace-nowrap shrink-0" style={{ animationDirection: "reverse", animationDuration: "50s" }}>
            {[...conditions, ...conditions].reverse().map((c, i) => (
              <span key={i} className="glass rounded-full px-4 md:px-6 py-2 md:py-3 text-base md:text-lg font-display text-muted-foreground">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
