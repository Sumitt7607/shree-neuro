import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/lib/smooth-scroll";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { treatmentsData } from "@/lib/treatments-data";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  ShieldAlert,
  Activity,
  Stethoscope,
  BookOpen,
  Calendar,
  Phone,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/treatments/$slug")({
  component: TreatmentDetail,
  head: ({ params }) => {
    const t = treatmentsData.find((d) => d.slug === params.slug);
    return {
      meta: [
        { title: t ? `${t.title} | Shree Neuro Clinic` : "Treatment | Shree Neuro Clinic" },
        {
          name: "description",
          content: t ? t.shortDesc : "Expert neurological treatment at Shree Neuro Clinic.",
        },
      ],
    };
  },
});

function TreatmentDetail() {
  const { slug } = Route.useParams();
  const t = treatmentsData.find((d) => d.slug === slug);
  const idx = treatmentsData.findIndex((d) => d.slug === slug);
  const prev = idx > 0 ? treatmentsData[idx - 1] : null;
  const next = idx < treatmentsData.length - 1 ? treatmentsData[idx + 1] : null;

  if (!t) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Condition not found</h1>
          <Link to="/treatments" className="text-primary hover:underline">
            Back to all conditions
          </Link>
        </div>
      </div>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: t.title,
    description: t.overview,
    possibleTreatment: t.treatments.map((tx) => ({ "@type": "MedicalTherapy", name: tx })),
    signOrSymptom: t.symptoms.map((s) => ({ "@type": "MedicalSignOrSymptom", name: s })),
    relevantSpecialty: { "@type": "MedicalSpecialty", name: "Neurology" },
    associatedAnatomy: { "@type": "AnatomicalStructure", name: "Brain and Nervous System" },
  };

  const relatedTreatments = treatmentsData.filter((item) =>
    t.relatedSlugs?.includes(item.slug)
  );

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SmoothScroll />
      <Nav />

      {/* 1. Hero Section */}
      <section className="pt-36 pb-12 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[500px] h-[400px] rounded-full bg-primary/6 blur-3xl -z-10" />
        <div className="container mx-auto max-w-5xl">
          <Breadcrumbs
            crumbs={[{ label: "What We Treat", href: "/treatments" }, { label: t.title }]}
          />
          <div className="grid md:grid-cols-12 gap-8 items-center mt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="md:col-span-7"
            >
              <span className="inline-block text-xs uppercase tracking-widest text-primary/80 font-semibold bg-primary/8 px-3 py-1 rounded-full mb-4">
                {t.category}
              </span>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-6">
                {t.title}
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
                {t.shortDesc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-5 flex justify-center"
            >
              <div className="relative w-full max-w-[360px] aspect-[4/3] rounded-[2rem] overflow-hidden glass p-2 shadow-elegant border border-primary/10">
                <img
                  src={
                    t.category === "Consultation"
                      ? "/images/consultation.png"
                      : t.category === "Diagnostics"
                        ? "/images/diagnostics.png"
                        : t.category === "Therapeutics"
                          ? "/images/therapeutics.png"
                          : "/images/rehabilitation.png"
                  }
                  alt={`${t.title} Illustration`}
                  className="w-full h-full object-cover rounded-[1.75rem]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Container */}
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 pb-20 space-y-16">
        {/* 2. Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
          <h2 className="font-display text-3xl md:text-4xl mb-4 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" /> Overview
          </h2>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{t.overview}</p>
        </motion.section>

        {/* 3 & 4. Symptoms & Causes Grid */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Symptoms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <h2 className="font-display text-2xl md:text-3xl mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Symptoms
              </h2>
              <ul className="space-y-4">
                {t.symptoms.map((s, index) => (
                  <li
                    key={index}
                    className="flex gap-3 items-start text-sm md:text-base text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Causes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <h2 className="font-display text-2xl md:text-3xl mb-6 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-primary shrink-0" /> Primary Causes
              </h2>
              <ul className="space-y-4">
                {t.causes.map((c, index) => (
                  <li
                    key={index}
                    className="flex gap-3 items-start text-sm md:text-base text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0 mt-2" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>

        {/* 5 & 6. Diagnosis & Treatment Options Grid */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Diagnosis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8"
          >
            <h2 className="font-display text-2xl md:text-3xl mb-6 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-primary shrink-0" /> Diagnosis
            </h2>
            <ul className="space-y-4">
              {t.diagnostics.map((d, index) => (
                <li
                  key={index}
                  className="flex gap-3 items-start text-sm md:text-base text-muted-foreground"
                >
                  <Activity className="w-4 h-4 text-primary shrink-0 mt-1" />
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Treatment Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-3xl p-8"
          >
            <h2 className="font-display text-2xl md:text-3xl mb-6 flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary shrink-0" /> Treatment Options
            </h2>
            <ul className="space-y-4">
              {t.treatments.map((tx, index) => (
                <li
                  key={index}
                  className="flex gap-3 items-start text-sm md:text-base text-muted-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                  {tx}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* 7. FAQs */}
        {t.faqs && t.faqs.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h2 className="font-display text-3xl md:text-4xl">Questions Answered</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3 w-full">
              {t.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="glass rounded-2xl px-6 border-0">
                  <AccordionTrigger className="font-display text-lg md:text-xl py-5 hover:no-underline text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm md:text-base pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.section>
        )}

        {/* 8. Related Treatments */}
        {relatedTreatments.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-display text-3xl md:text-4xl">Related Conditions</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedTreatments.map((related) => (
                <Link
                  key={related.slug}
                  to={`/treatments/$slug` as any}
                  params={{ slug: related.slug }}
                  className="group glass rounded-2xl p-6 hover:border-primary/40 transition flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block text-[10px] uppercase tracking-wider text-primary/80 font-semibold bg-primary/8 px-2.5 py-0.5 rounded-full mb-3">
                      {related.category}
                    </span>
                    <h3 className="font-display text-xl mb-2 group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                      {related.shortDesc}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}

        {/* 9. Book Appointment CTA */}
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
              Concerned about <span className="italic">{t.title}?</span>
            </h2>
            <p className="text-primary-foreground/90 mb-8 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Book a priority consultation with Dr. Pitamber Behuria. Most appointments are
              confirmed within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 max-w-md mx-auto">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-foreground font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition shadow-lg text-sm"
              >
                <Calendar className="w-4 h-4 shrink-0 text-primary" /> Book Appointment{" "}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+919938541722"
                className="inline-flex items-center justify-center gap-2 bg-white/15 text-primary-foreground border border-white/20 font-semibold px-8 py-3.5 rounded-full hover:bg-white/25 transition backdrop-blur text-sm"
              >
                <Phone className="w-4 h-4 shrink-0" /> +91 99385 41722
              </a>
            </div>
          </div>
        </motion.section>

        {/* Prev / Next navigation */}
        <div className="flex justify-between gap-4 pt-6 border-t border-border/40">
          {prev ? (
            <Link
              to={`/treatments/$slug` as any}
              params={{ slug: prev.slug }}
              className="group glass rounded-2xl px-5 py-4 flex items-center gap-3 hover:border-primary/40 transition max-w-[48%]"
            >
              <ArrowLeft className="w-4 h-4 text-primary shrink-0 group-hover:-translate-x-1 transition" />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">
                  Previous
                </div>
                <div className="font-display text-sm md:text-base leading-tight truncate max-w-[120px] sm:max-w-xs">
                  {prev.title}
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/treatments/$slug` as any}
              params={{ slug: next.slug }}
              className="group glass rounded-2xl px-5 py-4 flex items-center gap-3 hover:border-primary/40 transition max-w-[48%] ml-auto text-right"
            >
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">
                  Next
                </div>
                <div className="font-display text-sm md:text-base leading-tight truncate max-w-[120px] sm:max-w-xs">
                  {next.title}
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-primary shrink-0 group-hover:translate-x-1 transition" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
