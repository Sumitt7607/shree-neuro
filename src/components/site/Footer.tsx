import { Brain } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-10 md:mt-14 px-4 sm:px-6 py-8 md:py-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                <Brain className="w-4 h-4 text-primary-foreground" />
              </span>
              <span className="font-display text-xl md:text-2xl">Shree Neuro Clinic</span>
            </div>
            <p className="mt-4 text-muted-foreground text-sm max-w-sm">
              Advanced neurology, delivered with warmth. Restoring lives, one mind at a time.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3 md:mb-4">Clinic</div>
            <ul className="space-y-2 text-sm">
              <li><a href="/#services" className="hover:text-primary transition">Services</a></li>
              <li><a href="/#doctors" className="hover:text-primary transition">Doctors</a></li>
              <li><a href="/#visit" className="hover:text-primary transition">Visit</a></li>
              <li><a href="/#faq" className="hover:text-primary transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3 md:mb-4">Legal</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/terms" className="hover:text-primary transition">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-primary transition">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3 md:mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>42, Neuro Avenue</li>
              <li>MG Road, Bengaluru</li>
              <li>+91 12345 67890</li>
              <li>hello@shreeneuro.in</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 md:mt-14 pt-5 md:pt-6 border-t border-border flex flex-col sm:flex-row sm:justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Shree Neuro Clinic. All rights reserved.</div>
          <div>Care with conscience.</div>
        </div>
      </div>
    </footer>
  );
}
