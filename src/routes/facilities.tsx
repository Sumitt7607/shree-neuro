import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/lib/smooth-scroll";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { motion } from "framer-motion";
import {
  Activity,
  Brain,
  ScanLine,
  Microscope,
  HeartPulse,
  Stethoscope,
  Wifi,
  Shield,
  Clock,
} from "lucide-react";
import clinicImg from "@/assets/clinic.jpg";

export const Route = createFileRoute("/facilities")({
  component: Facilities,
  head: () => ({
    meta: [
      { title: "Facilities | Shree Neuro Clinic — EEG, MRI, EMG & More" },
      {
        name: "description",
        content:
          "Explore state-of-the-art neurological facilities at Shree Neuro Clinic: in-house EEG/EMG labs, advanced MRI protocols, movement disorder clinics, and 24/7 stroke response.",
      },
    ],
  }),
});

const facilities = [
  {
    icon: Activity,
    title: "EEG & Video-EEG Lab",
    desc: "Our electrophysiology lab provides routine, ambulatory, and long-term video-EEG monitoring to precisely characterize seizure types and localize epileptic foci.",
    highlights: [
      "Digital 32-channel EEG systems",
      "Sleep-deprived EEG protocols",
      "Long-term video-EEG monitoring",
      "Same-day reporting available",
    ],
  },
  {
    icon: Microscope,
    title: "EMG & Nerve Conduction Lab",
    desc: "Comprehensive nerve conduction studies and electromyography to evaluate peripheral nerve, neuromuscular junction, and muscle disorders.",
    highlights: [
      "Motor & sensory nerve conduction",
      "Repetitive nerve stimulation",
      "Single-fibre EMG available",
      "Pain-minimized protocols",
    ],
  },
  {
    icon: ScanLine,
    title: "Advanced Neuroimaging",
    desc: "Partnerships with premier imaging centres ensure our patients get neurology-specific MRI and CT protocols read by specialists who understand brain pathology.",
    highlights: [
      "3 Tesla MRI with epilepsy protocols",
      "MR Angiography & Spectroscopy",
      "Volumetric brain analysis",
      "CT & CT Perfusion imaging",
    ],
  },
  {
    icon: HeartPulse,
    title: "Stroke Response Unit",
    desc: "A dedicated stroke triage pathway ensures patients with acute stroke symptoms receive rapid clinical evaluation and thrombolysis coordination within the treatment window.",
    highlights: [
      "24/7 acute stroke evaluation",
      "tPA thrombolysis coordination",
      "Post-stroke rehabilitation planning",
      "Cardiac monitoring liaison",
    ],
  },
  {
    icon: Brain,
    title: "Movement Disorder Clinic",
    desc: "Specialized outpatient sessions for Parkinson's disease, essential tremor, dystonia, and DBS programming run by expert movement disorder neurologists.",
    highlights: [
      "Parkinson's disease management",
      "DBS programming and monitoring",
      "Botox injection clinic",
      "Gait analysis assessment",
    ],
  },
  {
    icon: Stethoscope,
    title: "Pediatric Neurology",
    desc: "Child-friendly consultation environments for developmental assessment, seizure management, and neurogenetic evaluation in infants, children, and adolescents.",
    highlights: [
      "Developmental delay assessments",
      "Childhood epilepsy clinics",
      "Neurogenetic counseling",
      "Child-friendly examination rooms",
    ],
  },
];

const amenities = [
  { icon: Wifi, label: "Free Wi-Fi Throughout" },
  { icon: Shield, label: "NABH-Aligned Standards" },
  { icon: Clock, label: "Extended Clinic Hours" },
];

function Facilities() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-12 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-primary/6 blur-3xl -z-10" />
        <div className="container mx-auto max-w-5xl">
          <Breadcrumbs crumbs={[{ label: "Facilities", href: "/facilities" }]} />
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-primary/90 mt-6 mb-4">
              — Our infrastructure
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.9] max-w-4xl">
              World-class <span className="italic text-gradient">neurological labs.</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Every diagnostic and therapeutic tool you need — under one roof, run by specialists
              who understand your brain.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Clinic image */}
      <section className="pb-10 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-3xl overflow-hidden aspect-[21/8]">
            <img
              src={clinicImg}
              alt="Shree Neuro Clinic Interior"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex gap-8 justify-center mt-6">
            {amenities.map((a) => (
              <div key={a.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <a.icon className="w-4 h-4 text-primary" />
                {a.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility cards */}
      <section className="py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            {facilities.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
                className="glass rounded-3xl p-7 hover:border-primary/40 transition group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow mb-5 group-hover:scale-110 transition">
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-display text-2xl mb-3">{f.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{f.desc}</p>
                <ul className="space-y-2">
                  {f.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] p-10 md:p-16 text-center bg-gradient-primary relative overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-primary-foreground text-4xl md:text-6xl mb-4">
                Ready to visit our <span className="italic">clinic?</span>
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto text-sm md:text-base mb-8">
                Book a consultation and experience state-of-the-art neurological care in a calm,
                compassionate environment.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-foreground font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
