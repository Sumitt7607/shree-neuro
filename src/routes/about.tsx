import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/lib/smooth-scroll";
import { motion } from "framer-motion";
import {
  Award,
  Heart,
  Users,
  Sparkles,
  CheckCircle2,
  Target,
  Eye,
  ShieldCheck,
  Clock,
  Star,
  Stethoscope,
  Brain,
  Microscope,
  GraduationCap,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import docImg from "@/assets/doc1.jpg";
import doc2Img from "@/assets/doc2.jpg";
import doc3Img from "@/assets/doc3.jpg";
import clinicImg from "@/assets/clinic.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Us | Shree Neuro Clinic — Advanced Neurology in Bengaluru" },
      {
        name: "description",
        content:
          "Learn about Shree Neuro Clinic, our mission, our specialist Dr. Pitamber Behuria, and our commitment to compassionate, world-class neurological care.",
      },
    ],
  }),
});

const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "50K+", label: "Patients Treated" },
  { value: "12+", label: "Specialist Doctors" },
  { value: "98%", label: "Patient Satisfaction" },
];

const credentials = [
  "MBBS, MD (Neurology) — AIIMS New Delhi",
  "Fellowship in Movement Disorders — UK",
  "DBS Programming & Advanced EMG Certified",
  "Published in 40+ peer-reviewed journals",
];

const values = [
  {
    icon: Heart,
    title: "Patient-First Philosophy",
    desc: "Every decision we make begins and ends with patient wellbeing and comfort.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    desc: "Fellowship-trained neurologists delivering evidence-based, precision care.",
  },
  {
    icon: Users,
    title: "Collaborative Care",
    desc: "Multi-disciplinary teams working together for the best patient outcomes.",
  },
  {
    icon: Sparkles,
    title: "Continuous Innovation",
    desc: "Adopting the latest neuro-imaging and treatment technologies.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Practice",
    desc: "Transparent, honest guidance with no unnecessary procedures or costs.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Support",
    desc: "We walk beside every patient and family through their neurological journey.",
  },
];

const trustPoints = [
  {
    icon: Brain,
    title: "Super-Speciality Neurology",
    desc: "Dedicated solely to brain and nervous system disorders.",
  },
  {
    icon: GraduationCap,
    title: "Internationally Trained Doctors",
    desc: "Fellowship holders from AIIMS, UK, and US institutions.",
  },
  {
    icon: Microscope,
    title: "In-House Diagnostics",
    desc: "EEG, EMG, NCS labs on site for same-day results.",
  },
  {
    icon: Clock,
    title: "Same-Day Appointments",
    desc: "Urgent neurology slots available every day of the week.",
  },
  {
    icon: Stethoscope,
    title: "Comprehensive Care",
    desc: "From first diagnosis through rehabilitation and long-term follow-up.",
  },
  {
    icon: Star,
    title: "Top-Rated in Bengaluru",
    desc: "Consistently ranked #1 neurology clinic in patient reviews.",
  },
];

const gallery = [clinicImg, docImg, doc2Img];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

function About() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Shree Neuro Clinic",
    description: "Advanced neurology, diagnostics, and rehabilitation under one roof.",
    url: "https://shreeneuro.in",
    telephone: "+91-99385-41722",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1st Floor, Ananda Varsha, above DCB Bank, Ice Factory Road, College Square",
      addressLocality: "Cuttack",
      addressRegion: "Odisha",
      postalCode: "753003",
      addressCountry: "IN",
    },
    medicalSpecialty: "Neurology",
    founder: { "@type": "Person", name: "Dr. Pitamber Behuria" },
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SmoothScroll />
      <Nav />

      {/* ── HERO BANNER ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 text-center overflow-hidden bg-gradient-to-b from-muted/40 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--primary)/0.08),transparent_70%)] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative container mx-auto max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
            — About Us
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] mb-5">
            About Shree Neuro Clinic
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Dedicated to compassionate, evidence-based advanced neurological care since 2000.
          </p>
        </motion.div>
      </section>

      {/* ── LEADING THE WAY — two-column + stats ───────────────── */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl"
          >
            <img
              src={clinicImg}
              alt="Shree Neuro Clinic interior"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Right — text + stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">
              — Our legacy
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-5">
              Leading the Way in Advanced{" "}
              <span className="italic text-gradient">Neurological Excellence</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
              Since 2000, Shree Neuro Clinic has been at the forefront of neurological medicine in
              South India. We combine cutting-edge diagnostics with deeply personal care — because
              the brain is both a science and a story.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Our team of fellowship-trained specialists has helped over 50,000 patients across
              epilepsy, stroke, Parkinson's, migraine, and more — restoring function, confidence,
              and quality of life.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="glass rounded-2xl px-5 py-4 border border-border/60"
                >
                  <div className="font-display text-3xl text-gradient leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── DR. PITAMBER BEHURIA ────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">
              — Our lead specialist
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-4">
              Dr. Pitamber Behuria
            </h2>
            <p className="text-sm font-semibold text-primary mb-4">
              Senior Consultant Neurologist & Founder
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
              With over 25 years of clinical experience, Dr. Behuria is recognised as one of India's
              leading neurologists. His expertise spans epilepsy, movement disorders, stroke
              management, and complex neurological diagnostics.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Dr. Behuria trained at AIIMS New Delhi and completed his fellowship in Movement
              Disorders in the United Kingdom. He founded Shree Neuro Clinic with one mission: to
              bring world-class neurological care to every patient.
            </p>
            <ul className="space-y-2 mb-8">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition"
            >
              Book a Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right — doctor photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden aspect-[3/4] shadow-xl"
          >
            <img
              src={docImg}
              alt="Dr. Pitamber Behuria"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ── MISSION & VISION ────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-6">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#0f1117] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 grid place-items-center mb-5">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-3xl mb-4">Our Mission</h2>
              <p className="text-white/70 text-sm leading-relaxed">
                To deliver world-class neurological care that is compassionate, evidence-based, and
                accessible — empowering every patient to reclaim their quality of life with dignity
                and confidence.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-primary/8 blur-3xl" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 grid place-items-center mb-5">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-display text-3xl mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To be South India's most trusted centre for neurological excellence — where
                innovation, research, and human connection converge to transform lives and raise the
                standard of brain health care.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CORE VALUES ─────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">
              — What we stand for
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">Our Core Values</h2>
            <p className="mt-3 text-muted-foreground text-sm max-w-xl mx-auto">
              The principles that guide every decision, every consultation, and every care plan we
              create.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 hover:border-primary/40 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 grid place-items-center mb-4 group-hover:bg-primary/15 transition">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg mb-2">{v.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY TRUST US ────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3">
              — Why patients choose us
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">Why Trust Us</h2>
            <p className="mt-3 text-muted-foreground text-sm max-w-xl mx-auto">
              Six reasons thousands of patients across South India rely on Shree Neuro Clinic for
              their neurological care.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trustPoints.map((t, i) => (
              <motion.div
                key={t.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-4 glass rounded-2xl p-5 hover:border-primary/30 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-primary grid place-items-center shadow-glow shrink-0 mt-0.5">
                  <t.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{t.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLINIC GALLERY ──────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-2">
                — Our space
              </p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">Clinic Gallery</h2>
            </div>
            <a
              href="/facilities"
              className="text-sm font-semibold text-primary hover:underline flex items-center gap-1"
            >
              View all facilities <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-3xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={img}
                  alt={`Shree Neuro Clinic gallery ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] bg-[#0f1117] text-white px-8 py-14 md:px-16 md:py-20 text-center relative overflow-hidden"
          >
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-4">
                — Take the first step
              </p>
              <h2 className="font-display text-4xl md:text-6xl mb-5 leading-tight">
                Ready to Prioritize Your{" "}
                <span className="italic text-gradient">Neurological Health?</span>
              </h2>
              <p className="text-white/60 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
                Book a consultation with our specialist team today. Most appointments are confirmed
                within 24 hours. We're here to help.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-foreground px-10 py-4 rounded-full text-sm font-bold hover:opacity-90 transition shadow-lg"
              >
                Book an Appointment Now <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
