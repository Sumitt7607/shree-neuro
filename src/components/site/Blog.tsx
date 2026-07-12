import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { blogsData } from "@/lib/blogs-data";
import { Link } from "@tanstack/react-router";

export function Blog() {
  // Show the latest 3 posts
  const posts = blogsData.slice(0, 3);

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
          <Link
            to="/blogs"
            className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-2"
          >
            View all articles <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-16">
          {posts.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <a
                href={`/blogs/${p.slug}`}
                className="group glass rounded-3xl p-8 flex flex-col justify-between min-h-[320px] hover:border-primary/40 transition block"
              >
                <div>
                  <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                    {p.category}
                  </span>
                  <h3 className="font-display text-3xl mt-4 leading-tight group-hover:text-gradient transition">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-3 line-clamp-2 leading-relaxed">
                    {p.excerpt}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {p.readTime} min read
                  </span>
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition text-primary" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
