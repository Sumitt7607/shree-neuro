import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
}

export function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  const allCrumbs = [{ label: "Home", href: "/" }, ...crumbs];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allCrumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.href ? `https://shreeneuro.in${c.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap"
      >
        {allCrumbs.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="w-3 h-3 shrink-0 opacity-50" />}
            {i === 0 && <Home className="w-3 h-3 shrink-0" />}
            {crumb.href && i < allCrumbs.length - 1 ? (
              <Link to={crumb.href as any} className="hover:text-primary transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span className={i === allCrumbs.length - 1 ? "text-foreground font-medium" : ""}>
                {crumb.label}
              </span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
