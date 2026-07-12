import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years experience" },
  { value: "13k+", label: "Total patients" },
];

export function Doctors() {
  return (
    <section id="doctors" className="relative py-20 md:py-32 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-primary/90 mb-4">— The team</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] max-w-3xl">
            Meet our <span className="italic text-gradient">specialist.</span>
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-16 flex justify-center">
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-5xl glass rounded-[2rem] overflow-hidden grid md:grid-cols-[1fr_1.4fr]"
          >
            {/* ── Left: Decorative Panel ── */}
            <div className="relative hidden md:flex items-center justify-center bg-muted/30 min-h-[420px] overflow-hidden">
              {[
                { top: "12%", left: "18%" },
                { top: "12%", left: "55%" },
                { top: "38%", left: "8%"  },
                { top: "38%", left: "42%" },
                { top: "38%", left: "75%" },
                { top: "64%", left: "24%" },
                { top: "64%", left: "62%" },
                { top: "82%", left: "10%" },
                { top: "82%", left: "48%" },
                { top: "82%", left: "80%" },
              ].map((pos, i) => (
                <span
                  key={i}
                  className="absolute text-foreground/[0.07] select-none pointer-events-none font-bold"
                  style={{ top: pos.top, left: pos.left, fontSize: 40, lineHeight: 1 }}
                >
                  +
                </span>
              ))}
              <span className="text-foreground/[0.04] select-none pointer-events-none font-black"
                style={{ fontSize: 200, lineHeight: 1 }}>
                +
              </span>
            </div>

            {/* ── Right: Content ── */}
            <div className="flex flex-col justify-center p-6 md:p-12">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                senior neurologist
              </p>

              <h3 className="font-display text-2xl md:text-4xl text-foreground mb-4 md:mb-6 leading-tight">
                Dr. Pitamber Behuria
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Dr. Pitamber Behuria is a highly dedicated consultant neurologist with extensive
                experience in diagnosing and treating complex neurological disorders — including
                stroke, epilepsy, headache, and neuromuscular conditions.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 md:mb-8">
                He completed his MD and DM in Neurology from premier institutions and has consistently
                delivered evidence-based, compassionate neurological care. His patient-first philosophy
                and precision diagnostics set the standard at Shree Neuro Clinic.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6 md:mb-8">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="border border-border rounded-2xl px-4 py-3 md:px-5 md:py-4"
                  >
                    <p className="font-display text-2xl md:text-3xl text-foreground mb-1">{s.value}</p>
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>

              <a
                href="/#book"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b-2 border-foreground pb-0.5 w-fit hover:text-primary hover:border-primary transition"
              >
                Book appointment with me
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
