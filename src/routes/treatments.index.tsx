import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/lib/smooth-scroll";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { treatmentsData } from "@/lib/treatments-data";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Brain,
  Activity,
  Zap,
  RefreshCw,
  Moon,
  MessageSquare,
  Sparkles,
  Flame,
  UserCheck,
  Play,
  Stethoscope,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Phone,
  HelpCircle,
  Clock,
  BriefcaseMedical,
} from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/treatments/")({
  component: Treatments,
  head: () => ({
    meta: [
      { title: "What We Treat | Shree Neuro Clinic — Neurological Conditions" },
      {
        name: "description",
        content:
          "Shree Neuro Clinic treats a wide range of neurological conditions including migraine, epilepsy, stroke, Parkinson's, Alzheimer's, MS, vertigo, and more.",
      },
    ],
  }),
});

const categories = [
  "All",
  "Consultation",
  "Diagnostics",
  "Therapeutics",
  "Rehabilitation",
] as const;

// Symptoms list with icons
const symptomsList = [
  { title: "Persistent Headaches", description: "Chronic or throbbing head pain", icon: Flame },
  { title: "Frequent Dizziness", description: "Sensations of spinning or unsteadiness", icon: RefreshCw },
  { title: "Motor Changes / Tremors", description: "Involuntary shaking or muscle stiffness", icon: Zap },
  { title: "Numbness / Tingling", description: "Loss of sensation or pinprick feelings", icon: Sparkles },
  { title: "Memory Loss", description: "Confusion or cognitive forgetfulness", icon: Brain },
  { title: "Balance Issues", description: "Unsteady walking or loss of coordination", icon: UserCheck },
  { title: "Speech Difficulty", description: "Slurred speech or word-finding trouble", icon: MessageSquare },
  { title: "Sleep Disorders", description: "Insomnia, sleep apnea, or daytime fatigue", icon: Moon },
];

// Diagnostic approach steps
const diagnosticSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "Detailed medical history review and clinical neurological interview.",
  },
  {
    step: "02",
    title: "Examination",
    description: "In-office physical assessment of motor, sensory, and cognitive reflexes.",
  },
  {
    step: "03",
    title: "Investigation",
    description: "Advanced diagnostics including high-resolution MRI, CT scans, and Video EEG.",
  },
  {
    step: "04",
    title: "Treatment Plan",
    description: "A personalized recovery scheme including medical therapy and lifestyle alignment.",
  },
];

// In-office FAQs
const faqItems = [
  {
    q: "When should I see a neurologist?",
    a: "You should consult a neurologist if you experience warning signs like persistent or severe headaches, chronic dizziness, numbness, tingling, limb weakness, memory loss, speech changes, or sleep disruptions.",
  },
  {
    q: "What should I bring to my first appointment?",
    a: "Please bring any prior neuro-imaging (MRI or CT scan files), prescriptions, relevant blood work, previous medical summaries, and a complete list of current medications.",
  },
  {
    q: "Do I need a referral to visit Shree Neuro Clinic?",
    a: "No, a referral is not strictly required. You can book a priority consultation directly for primary care, second opinions, or specialized diagnostic evaluations.",
  },
  {
    q: "How long does a typical diagnostic evaluation take?",
    a: "Initial clinical consultations take about 30 to 45 minutes. Specialized nerve or brain wave testings (such as EEG, EMG, or NCS) can take between 1 to 2 hours depending on the procedures.",
  },
  {
    q: "Are diagnostic services covered by insurance?",
    a: "Yes. Most diagnostic services and neurological evaluations are eligible for insurance reimbursement. We support cashless processing and coordinate with leading insurance providers.",
  },
];

// Map treatments to icons
const getTreatmentIcon = (slug: string) => {
  switch (slug) {
    case "migraine-headaches":
      return Flame;
    case "epilepsy-seizures":
      return Zap;
    case "stroke":
      return Activity;
    case "parkinsons-disease":
      return RefreshCw;
    case "alzheimers-dementia":
      return Brain;
    case "vertigo":
      return UserCheck;
    default:
      return Stethoscope;
  }
};

function Treatments() {
  const [filter, setFilter] = useState<string>("All");
  const [search, setSearch] = useState("");

  const filtered = treatmentsData.filter((t) => {
    const matchCat = filter === "All" || t.category === filter;
    const matchSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.shortDesc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <Nav />

      {/* 1. Hero Section */}
      <section className="pt-36 pb-12 px-4 sm:px-6 relative overflow-hidden bg-muted/30">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-primary/4 blur-3xl -z-10" />
        <div className="container mx-auto max-w-6xl text-center">
          <Breadcrumbs crumbs={[{ label: "What We Treat", href: "/treatments" }]} />
          <Reveal>
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.9] mt-6 mb-6">
              What We <span className="italic text-gradient">Treat</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mx-auto">
              Expert diagnosis and treatments for a wide range of neurological conditions,
              providing specialized care for your brain and spine health.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-16 space-y-24">
        {/* 2. Specialized Neurological Care */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2rem] overflow-hidden shadow-elegant border border-border/40 aspect-[4/3]"
          >
            <img
              src="/images/consultation.png"
              alt="Clinical Consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
              <button
                className="w-16 h-16 rounded-full bg-white/90 text-primary flex items-center justify-center shadow-lg hover:scale-105 hover:bg-white transition-all duration-300"
                aria-label="Play video"
              >
                <Play className="w-6 h-6 fill-primary translate-x-0.5" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-bold">
              Specialized Neurological Care
            </span>
            <h2 className="font-display text-4xl sm:text-5xl leading-tight">
              Advanced, Compassionate Neurology Care
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At Shree Neuro Clinic, we understand that neurological disorders can be complex and
              life-altering. Our approach combines clinical excellence with compassionate care to
              ensure every patient receives a personalized treatment plan tailored to their specific
              needs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of specialists works collaboratively to identify the root cause of symptoms,
              ensuring accurate diagnosis and effective management of both common and rare
              neurological conditions.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#diagnostic-approach"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold px-6 py-3 hover:bg-primary/95 transition text-sm"
              >
                Our Approach
              </a>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full bg-muted text-foreground border border-border font-semibold px-6 py-3 hover:bg-muted/80 transition text-sm"
              >
                Meet Our Doctor
              </Link>
            </div>
          </motion.div>
        </section>

        {/* 3. Conditions We Treat */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl sm:text-5xl">Conditions We Treat</h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              Comprehensive management for various neurological disorders
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-between items-center gap-6 border-b border-border/40 pb-6">
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition ${
                    filter === cat
                      ? "bg-gradient-primary text-white shadow-glow"
                      : "glass hover:border-primary/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search conditions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-muted/40 border border-border rounded-full pl-9 pr-4 py-2 text-xs md:text-sm outline-none focus:border-primary transition"
              />
            </div>
          </div>

          {/* Dynamic Grid of Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t, i) => {
              const IconComp = getTreatmentIcon(t.slug);
              return (
                <motion.div
                  key={t.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                >
                  <Link
                    to={`/treatments/$slug` as any}
                    params={{ slug: t.slug }}
                    className="group glass rounded-2xl p-6 hover:border-primary/40 transition flex flex-col justify-between h-full border border-border/40"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 text-primary">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="font-display text-2xl mb-2 group-hover:text-primary transition-colors">
                        {t.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {t.shortDesc}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:gap-2.5 transition-all">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 4. Are You Experiencing Any of These Symptoms? */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl sm:text-5xl">
              Are You Experiencing Any of These Symptoms?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              Identify potential warning signs that require expert neurological attention
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {symptomsList.map((s, i) => {
              const IconComp = s.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="glass rounded-2xl p-5 text-center flex flex-col items-center justify-center border border-border/30 hover:border-primary/20 transition group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/6 flex items-center justify-center mb-3 text-primary group-hover:scale-105 transition-transform duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{s.title}</h3>
                  <p className="text-[11px] text-muted-foreground">{s.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold px-8 py-3.5 hover:bg-primary/95 transition shadow-lg text-sm"
            >
              Book A Consultation Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* 5. Our Diagnostic Approach */}
        <section
          id="diagnostic-approach"
          className="rounded-[2.5rem] bg-slate-950 text-slate-100 p-8 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[300px] rounded-full bg-primary/10 blur-3xl -z-10" />
          <div className="text-center space-y-4 mb-12">
            <h2 className="font-display text-4xl sm:text-5xl text-white">Our Diagnostic Approach</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
              A systematic path to sensory and neural assessment
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {diagnosticSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 relative group hover:border-primary/40 transition duration-300"
              >
                <div className="text-4xl font-bold font-display text-primary/80 group-hover:text-primary transition-colors mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. Why Early Diagnosis Matters */}
        <section className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 space-y-6"
          >
            <h2 className="font-display text-4xl sm:text-5xl leading-tight">
              Why Early Diagnosis Matters
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Timely intervention is key to managing neurological conditions effectively. Diagnostics
              help pinpoint abnormalities before they cause irreversible damage, offering a better
              chance of recovery and an improved long-term quality of life.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm md:text-base text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Better long-term prognosis
                and treatment outcomes
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Prevention of secondary
                neurological complications
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Slower progression rate
                for chronic disorders
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="#diagnostic-approach"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold px-6 py-3 hover:bg-primary/95 transition text-sm"
              >
                Learn About Screening <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 rounded-[2rem] overflow-hidden shadow-elegant border border-border/40 aspect-[4/3] flex justify-center"
          >
            <img
              src="/images/diagnostics.png"
              alt="Diagnostics Illustration"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        {/* 7. Concerned About Your Symptoms? */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] p-8 md:p-14 bg-gradient-primary text-center relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-primary-foreground text-4xl md:text-6xl leading-[0.95] mb-4">
              Concerned About Your Symptoms?
            </h2>
            <p className="text-primary-foreground/90 mb-8 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Don't wait for symptoms to worsen. Schedule a comprehensive evaluation with our
              experts today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 max-w-md mx-auto">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-foreground font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition shadow-lg text-sm"
              >
                <Calendar className="w-4 h-4 shrink-0 text-primary" /> Book Appointment{" "}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919938541722"
                className="inline-flex items-center justify-center gap-2 bg-white/15 text-primary-foreground border border-white/20 font-semibold px-8 py-3.5 rounded-full hover:bg-white/25 transition backdrop-blur text-sm"
              >
                <Phone className="w-4 h-4 shrink-0" /> Call Us: +91 99385 41722
              </a>
            </div>
          </div>
        </motion.section>

        {/* 8. Frequently Asked Questions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl sm:text-5xl">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              Find answers to common questions about neurological examinations and consultations
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3 w-full max-w-4xl mx-auto">
            {faqItems.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass rounded-2xl px-6 border-0">
                <AccordionTrigger className="font-display text-lg md:text-xl py-5 hover:no-underline text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
}
