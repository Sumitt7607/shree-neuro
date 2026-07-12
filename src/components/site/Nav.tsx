import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    label: "What We Treat",
    href: "/treatments",
    dropdown: [
      { slug: "migraine-headaches", label: "Migraine & Headaches" },
      { slug: "epilepsy-seizures", label: "Epilepsy & Seizures" },
      { slug: "stroke", label: "Stroke Response" },
      { slug: "parkinsons-disease", label: "Parkinson's Disease" },
      { slug: "alzheimers-dementia", label: "Alzheimer's & Dementia" },
      { slug: "vertigo", label: "Vertigo" },
    ],
  },
  { href: "/facilities", label: "Facilities" },
  { href: "/contact", label: "Contact" },
  { href: "/blogs", label: "Blogs" },
];

export function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const location = useLocation();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on route change
  React.useEffect(() => {
    setOpenDropdown(null);
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/92 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-background/80 backdrop-blur-md border-b border-border/40",
      )}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <ArrowUpRight className="w-5 h-5 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          <span className="font-sans font-bold tracking-wider text-xs md:text-sm text-foreground">
            SHREE NEURO CLINIC
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) =>
            l.dropdown ? (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(l.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={l.href as any}
                  className="flex items-center gap-1 text-xs uppercase tracking-widest font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {l.label}
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200",
                      openDropdown === l.label && "rotate-180",
                    )}
                  />
                </Link>
                <AnimatePresence>
                  {openDropdown === l.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-3 w-56"
                    >
                      <div className="bg-white/95 backdrop-blur-xl border border-border/60 rounded-2xl shadow-xl p-2">
                        {l.dropdown.map((d) => (
                          <Link
                            key={d.slug}
                            to="/treatments/$slug"
                            params={{ slug: d.slug }}
                            className="block px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                          >
                            {d.label}
                          </Link>
                        ))}
                        <div className="border-t border-border/40 mt-2 pt-2">
                          <Link
                            to="/treatments"
                            className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
                          >
                            View all conditions →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={l.href}
                to={l.href as any}
                className="text-xs uppercase tracking-widest font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        {/* Right: CTA & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-primary/95 transition-all duration-300 shadow-sm shadow-primary/10"
          >
            Book Appointment <span className="ml-1 text-sm font-light">+</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-full border border-border/80 flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md"
          >
            <div className="flex flex-col py-4 px-6 gap-1">
              {links.map((l, idx) => (
                <React.Fragment key={l.label}>
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2, delay: idx * 0.05 }}
                  >
                    <Link
                      to={l.href as any}
                      className="block py-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                  {l.dropdown && (
                    <div className="pl-4 pb-2 space-y-1">
                      {l.dropdown.map((d) => (
                        <Link
                          key={d.slug}
                          to="/treatments/$slug"
                          params={{ slug: d.slug }}
                          className="block py-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
              <Link
                to="/contact"
                className="mt-4 flex items-center justify-center gap-1 bg-primary text-primary-foreground py-3.5 rounded-2xl text-sm font-semibold uppercase tracking-wider hover:bg-primary/95 transition-all duration-300"
              >
                Book Appointment +
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
