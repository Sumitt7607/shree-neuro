import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/lib/smooth-scroll";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { blogsData } from "@/lib/blogs-data";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/blogs")({
  component: Blogs,
  head: () => ({
    meta: [
      { title: "Blogs | Shree Neuro Clinic — Neurology Insights & Patient Education" },
      {
        name: "description",
        content:
          "Read expert neurology blogs from Dr. Pitamber Behuria on migraines, stroke, epilepsy, Parkinson's, sleep health, and more at Shree Neuro Clinic.",
      },
    ],
  }),
});

const categories = [
  "All",
  "Patient Education",
  "Emergency Awareness",
  "Early Detection",
  "Brain Wellness",
];

function Blogs() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = blogsData.filter((b) => {
    const matchCat = filter === "All" || b.category === filter;
    const matchSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-12 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] rounded-full bg-primary/6 blur-3xl -z-10" />
        <div className="container mx-auto max-w-6xl">
          <Breadcrumbs crumbs={[{ label: "Blogs", href: "/blogs" }]} />
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-primary/90 mt-6 mb-4">
              — Neurology insights
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.9] max-w-4xl">
              Brain health, <span className="italic text-gradient">explained.</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Expert insights on neurological health, treatment advances, and patient education —
              written by our clinical specialists.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
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
            <div className="relative w-full sm:w-60">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-muted/50 border border-border rounded-full pl-9 pr-4 py-2.5 text-sm outline-none focus:border-primary transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog cards */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-xl font-display">No articles found.</p>
              <p className="text-sm mt-2">Try adjusting your search or filter.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((b, i) => (
                <motion.div
                  key={b.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                >
                  <Link
                    to={`/blogs/$slug` as any}
                    params={{ slug: b.slug }}
                    className="group glass rounded-3xl p-6 hover:border-primary/40 transition flex flex-col h-full block"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs uppercase tracking-widest text-primary/80 font-semibold bg-primary/8 px-3 py-1 rounded-full">
                        {b.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {b.readTime} min
                      </span>
                    </div>
                    <h2 className="font-display text-xl md:text-2xl mb-3 group-hover:text-primary transition leading-tight">
                      {b.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {b.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{b.author}</span>
                      <div className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
