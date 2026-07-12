import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";

export function BookCTA() {
  return (
    <section id="book" className="relative py-10 md:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-10 md:p-16 text-center shadow-elegant"
          style={{ background: "var(--gradient-primary)" }}
        >
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary-foreground/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="relative">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/80 mb-4 md:mb-6">— Book an opinion</p>
            <h2 className="font-display text-primary-foreground text-4xl sm:text-5xl md:text-7xl leading-[0.95] max-w-3xl mx-auto">
              Ready when <span className="italic">you are.</span>
            </h2>
            <p className="mt-4 md:mt-6 text-primary-foreground/90 max-w-xl mx-auto text-sm md:text-base">
              Book a consultation with our specialists. Most appointments confirmed within 24 hours.
            </p>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <a href="#visit" className="inline-flex items-center justify-center gap-2 rounded-full bg-background text-foreground font-medium px-6 py-3.5 hover:opacity-90 transition text-sm md:text-base">
                <Calendar className="w-4 h-4 shrink-0" /> Book appointment
              </a>
              <a href="tel:+911234567890" className="inline-flex items-center justify-center gap-2 rounded-full bg-background/15 text-primary-foreground font-medium px-6 py-3.5 hover:bg-background/25 transition backdrop-blur text-sm md:text-base">
                <Phone className="w-4 h-4 shrink-0" /> +91 12345 67890
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
