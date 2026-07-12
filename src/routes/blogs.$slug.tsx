import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/lib/smooth-scroll";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { blogsData } from "@/lib/blogs-data";
import { motion } from "framer-motion";
import { Clock, ArrowRight, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blogs/$slug")({
  component: BlogDetail,
  head: ({ params }) => {
    const b = blogsData.find((d) => d.slug === params.slug);
    return {
      meta: [
        { title: b ? `${b.title} | Shree Neuro Clinic Blog` : "Blog | Shree Neuro Clinic" },
        {
          name: "description",
          content: b ? b.excerpt : "Expert neurology insights from Shree Neuro Clinic.",
        },
      ],
    };
  },
});

function BlogDetail() {
  const { slug } = Route.useParams();
  const b = blogsData.find((d) => d.slug === slug);
  const idx = blogsData.findIndex((d) => d.slug === slug);
  const prev = idx > 0 ? blogsData[idx - 1] : null;
  const next = idx < blogsData.length - 1 ? blogsData[idx + 1] : null;

  if (!b) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Article not found</h1>
          <Link to="/blogs" className="text-primary hover:underline">
            Back to all articles
          </Link>
        </div>
      </div>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: b.title,
    description: b.excerpt,
    author: { "@type": "Person", name: b.author },
    datePublished: b.publishDate,
    publisher: {
      "@type": "MedicalOrganization",
      name: "Shree Neuro Clinic",
      url: "https://shreeneuro.in",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://shreeneuro.in/blogs/${b.slug}` },
  };

  const htmlContent = b.content
    .split("\n\n")
    .map((block) => {
      if (block.startsWith("## ")) {
        return `<h2 class="font-display text-2xl md:text-3xl mt-10 mb-4">${block.slice(3)}</h2>`;
      }
      if (block.startsWith("**") && block.endsWith("**")) {
        return `<p class="text-muted-foreground leading-relaxed mb-4"><strong>${block.slice(2, -2)}</strong></p>`;
      }
      if (block.startsWith("- ")) {
        const items = block
          .split("\n")
          .filter((l) => l.startsWith("- "))
          .map((l) => `<li class="mb-1">${l.slice(2)}</li>`)
          .join("");
        return `<ul class="list-disc pl-5 space-y-1 text-muted-foreground mb-4">${items}</ul>`;
      }
      // Handle inline bold **...**
      const withBold = block.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      return `<p class="text-muted-foreground leading-relaxed mb-4">${withBold}</p>`;
    })
    .join("");

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SmoothScroll />
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-12 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-primary/6 blur-3xl -z-10" />
        <div className="container mx-auto max-w-3xl">
          <Breadcrumbs
            crumbs={[
              { label: "Blogs", href: "/blogs" },
              { label: b.title.length > 40 ? b.title.slice(0, 40) + "…" : b.title },
            ]}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mt-6 mb-5 flex-wrap">
              <span className="text-xs uppercase tracking-widest text-primary/80 font-semibold bg-primary/8 px-3 py-1 rounded-full">
                {b.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" /> {b.readTime} min read
              </span>
              <span className="text-xs text-muted-foreground">
                {new Date(b.publishDate).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] mb-6">
              {b.title}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              {b.excerpt}
            </p>
            <div className="flex items-center gap-3 mt-6">
              <div className="w-9 h-9 rounded-full bg-gradient-primary grid place-items-center shadow-glow">
                <span className="text-white text-sm font-bold">
                  {b.author.split(" ").pop()![0]}
                </span>
              </div>
              <div>
                <div className="text-sm font-semibold">{b.author}</div>
                <div className="text-xs text-muted-foreground">Neurologist, Shree Neuro Clinic</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 md:p-12"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-8 rounded-[2rem] p-8 md:p-12 bg-gradient-primary text-center relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-primary-foreground text-3xl md:text-4xl mb-3">
                Have neurological concerns?
              </h2>
              <p className="text-primary-foreground/80 mb-6 text-sm max-w-md mx-auto">
                Book a consultation with our specialist team. Most appointments are confirmed within
                24 hours.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-foreground font-semibold px-8 py-3 rounded-full hover:opacity-90 transition text-sm"
              >
                Book Appointment <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Prev/Next */}
          <div className="flex justify-between gap-4 mt-8">
            {prev ? (
              <a
                href={`/blogs/${prev.slug}`}
                className="group glass rounded-2xl px-5 py-4 flex items-center gap-3 hover:border-primary/40 transition max-w-[48%]"
              >
                <ArrowLeft className="w-4 h-4 text-primary shrink-0 group-hover:-translate-x-1 transition" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Previous
                  </div>
                  <div className="font-display text-sm leading-tight line-clamp-2">
                    {prev.title}
                  </div>
                </div>
              </a>
            ) : (
              <div />
            )}
            {next ? (
              <a
                href={`/blogs/${next.slug}`}
                className="group glass rounded-2xl px-5 py-4 flex items-center gap-3 hover:border-primary/40 transition max-w-[48%] ml-auto text-right"
              >
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Next
                  </div>
                  <div className="font-display text-sm leading-tight line-clamp-2">
                    {next.title}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-primary shrink-0 group-hover:translate-x-1 transition" />
              </a>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
