import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/lib/smooth-scroll";
import { treatmentsData } from "@/lib/treatments-data";
import { blogsData } from "@/lib/blogs-data";
import { type LucideIcon, Home, Users, BookOpen, Scale, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/sitemap")({
  component: Sitemap,
  head: () => ({
    meta: [
      { title: "Sitemap | Shree Neuro Clinic" },
      {
        name: "description",
        content:
          "Complete sitemap of Shree Neuro Clinic website — all pages, treatments, and articles listed for easy navigation.",
      },
    ],
  }),
});

function SitemapSection({
  icon: Icon,
  title,
  links,
}: {
  icon: LucideIcon;
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="glass rounded-3xl p-7">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="font-display text-2xl">{title}</h2>
      </div>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition group"
            >
              <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition" />
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Sitemap() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <Nav />

      <main className="container mx-auto max-w-5xl px-4 sm:px-6 pt-36 pb-20">
        <p className="text-sm uppercase tracking-[0.3em] text-primary/90 mb-4">— Site navigation</p>
        <h1 className="font-display text-5xl md:text-7xl leading-tight mb-14">
          Sitemap <span className="italic text-gradient">overview.</span>
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SitemapSection
            icon={Home}
            title="Core Pages"
            links={[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "What We Treat", href: "/treatments" },
              { label: "Facilities", href: "/facilities" },
              { label: "Contact Us", href: "/contact" },
              { label: "Blogs", href: "/blogs" },
            ]}
          />
          <SitemapSection
            icon={Users}
            title="Treatments"
            links={treatmentsData.map((t) => ({
              label: t.title,
              href: `/treatments/${t.slug}`,
            }))}
          />
          <SitemapSection
            icon={BookOpen}
            title="Blog Articles"
            links={blogsData.map((b) => ({
              label: b.title,
              href: `/blogs/${b.slug}`,
            }))}
          />
          <SitemapSection
            icon={Scale}
            title="Legal Pages"
            links={[
              { label: "Terms of Service", href: "/terms" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Cookie Policy", href: "/cookies" },
            ]}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
