import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBrain from "@/assets/hero-brain.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] flex items-center overflow-hidden">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img
          src={heroBrain}
          alt="Neural network"
          width={1920}
          height={1280}
          className="w-full h-full object-cover opacity-60 brightness-90 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background/70" />
      </motion.div>

      {/* floating glows — hidden on mobile to prevent overflow */}
      <div className="hidden md:block absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-primary/15 blur-3xl animate-pulse-glow" />
      <div className="hidden md:block absolute bottom-20 -right-24 w-80 h-80 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <motion.div style={{ y: textY, opacity }} className="relative z-10 w-full container mx-auto px-4 sm:px-6 pt-28 pb-16">

        <h1 className="font-display text-[clamp(2.4rem,7vw,7rem)] leading-[0.95] tracking-tighter max-w-5xl">
          {"Healing the mind,".split(" ").map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-3"
            >
              {w}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 60, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block text-gradient italic"
          >
            restoring the you.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          Shree Neuro Clinic brings world-class neurological diagnosis, treatment, and rehabilitation under one calm, connected roof.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
        >
          <a href="#book" className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary text-primary-foreground font-medium px-6 py-3.5 shadow-glow hover:opacity-95 transition">
            Book an appointment
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </a>
          <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full glass px-6 py-3.5 hover:bg-foreground/5 transition">
            Explore services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl"
        >
          {[
            ["25+", "Years of care"],
            ["50k+", "Patients treated"],
            ["12", "Neuro specialists"],
            ["4.9★", "Patient rating"],
          ].map(([k, v]) => (
            <div key={v}>
              <div className="font-display text-2xl md:text-4xl text-gradient">{k}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{v}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
