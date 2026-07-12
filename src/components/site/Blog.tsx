import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  { tag: "Headache", title: "Migraine triggers you might be missing", read: "5 min read" },
  { tag: "Stroke", title: "The golden hour: why speed saves brain", read: "4 min read" },
  { tag: "Sleep", title: "How poor sleep rewires your nervous system", read: "6 min read" },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-primary/90 mb-4">— Journal</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-3xl">
              From the <span className="italic text-gradient">blog.</span>
            </h2>
          </Reveal>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2">View all <ArrowUpRight className="w-4 h-4" /></a>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-16">
          {posts.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group glass rounded-3xl p-8 flex flex-col justify-between min-h-64 hover:border-primary/40 transition"
            >
              <div>
                <span className="text-xs uppercase tracking-widest text-primary">{p.tag}</span>
                <h3 className="font-display text-3xl mt-4 leading-tight group-hover:text-gradient transition">
                  {p.title}
                </h3>
              </div>
              <div className="mt-8 flex items-center justify-between text-sm text-muted-foreground">
                <span>{p.read}</span>
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
