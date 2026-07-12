import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#top", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#doctors", label: "Doctors" },
  { href: "/#treat", label: "We Treat" },
  { href: "/#testimonials", label: "Stories" },
  { href: "/#visit", label: "Visit" },
];

export function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <a href="/#top" onClick={handleLinkClick} className="flex items-center gap-2 group">
          <ArrowUpRight className="w-5 h-5 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          <span className="font-sans font-bold tracking-wider text-xs md:text-sm text-foreground">
            SHREE NEURO CLINIC
          </span>
        </a>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-widest font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right: CTA & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <a
            href="/#book"
            onClick={handleLinkClick}
            className="hidden sm:inline-flex items-center gap-1 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-primary/95 transition-all duration-300 shadow-sm shadow-primary/10"
          >
            Book Appointment <span className="ml-1 text-sm font-light">+</span>
          </a>

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
                <motion.a
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: idx * 0.05 }}
                  key={l.href}
                  href={l.href}
                  onClick={handleLinkClick}
                  className="py-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="/#book"
                onClick={handleLinkClick}
                className="mt-4 flex items-center justify-center gap-1 bg-primary text-primary-foreground py-3.5 rounded-2xl text-sm font-semibold uppercase tracking-wider hover:bg-primary/95 transition-all duration-300"
              >
                Book Appointment +
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
