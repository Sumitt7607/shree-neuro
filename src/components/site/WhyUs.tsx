import { Reveal } from "./Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, Users, Shield, Heart, Sparkles } from "lucide-react";

const reasons = [
  { icon: Award, title: "Board-certified team", desc: "Fellowship-trained neurologists & neurosurgeons." },
  { icon: Clock, title: "Same-day diagnostics", desc: "EEG, EMG and imaging reported the same day." },
  { icon: Users, title: "Family-first care", desc: "Every plan explained in language you understand." },
  { icon: Shield, title: "Accredited & safe", desc: "NABH-standard protocols and infection control." },
  { icon: Heart, title: "Continuous follow-up", desc: "Care coordinators check in between visits." },
  { icon: Sparkles, title: "Modern technology", desc: "Latest neuro-imaging & precision therapeutics." },
];

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative py-10 md:py-16 px-4 sm:px-6 overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 md:w-[42rem] h-80 md:h-[42rem] rounded-full bg-primary/8 blur-3xl" />
      </motion.div>

      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-primary/90 mb-4 text-center">— Why choose us</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] text-center max-w-4xl mx-auto">
            Why choose <span className="italic text-gradient">Shree Neuro.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14 md:mt-20">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
              className="rounded-3xl p-6 md:p-8 border border-white/5 hover:border-primary/40 transition"
              style={{ background: "oklch(0.18 0.02 60)" }}
            >
              <r.icon className="w-7 h-7 md:w-8 md:h-8 text-primary mb-4" />
              <h3 className="font-display text-xl md:text-2xl mb-2 text-white">{r.title}</h3>
              <p className="text-sm text-white/50">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
