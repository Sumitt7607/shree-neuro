import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { Brain, Activity, Stethoscope, HeartPulse, Microscope, ScanLine } from "lucide-react";

const services = [
  { icon: Brain, title: "Neurology Consults", desc: "Detailed assessment of headache, dizziness, memory & nerve issues." },
  { icon: Activity, title: "EEG & EMG Labs", desc: "In-house electrophysiology with same-day reporting." },
  { icon: ScanLine, title: "Advanced Imaging", desc: "MRI & CT protocols tailored for neurological precision." },
  { icon: HeartPulse, title: "Stroke Response", desc: "Rapid triage, thrombolysis pathway & recovery planning." },
  { icon: Microscope, title: "Movement Disorders", desc: "Parkinson's, tremor & dystonia clinics with DBS support." },
  { icon: Stethoscope, title: "Pediatric Neuro", desc: "Developmental delays, seizures & neurogenetic care." },
];

export function Services() {
  return (
    <section id="services" className="relative py-10 md:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-primary/90 mb-4">— What we offer</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] max-w-3xl">
            Comprehensive neurology <span className="italic text-gradient">under one roof.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl text-sm md:text-base">
            Every diagnostic, therapeutic and rehabilitative service you need — coordinated by one dedicated team.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 md:mt-16">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group glass rounded-3xl p-6 hover:border-primary/40 transition"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow mb-5 group-hover:scale-110 transition">
                <s.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl md:text-2xl mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
