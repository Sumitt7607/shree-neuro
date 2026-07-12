import { Brain } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative mt-10 md:mt-14 px-4 sm:px-6 py-10 md:py-14 bg-[#0a0c10] border-t border-white/5 text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                <Brain className="w-4 h-4 text-primary-foreground" />
              </span>
              <span className="font-display text-xl md:text-2xl text-white">Shree Neuro Clinic</span>
            </div>
            <p className="mt-4 text-white/60 text-sm max-w-sm leading-relaxed">
              Advanced neurology, delivered with warmth. Restoring lives, one mind at a time.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-white/40 mb-3 md:mb-4">Clinic</div>
            <ul className="space-y-2 text-sm">
              <li><a href="/#services" className="text-white/70 hover:text-primary transition">Services</a></li>
              <li><a href="/#doctors" className="text-white/70 hover:text-primary transition">Doctors</a></li>
              <li><a href="/#visit" className="text-white/70 hover:text-primary transition">Visit</a></li>
              <li><a href="/#faq" className="text-white/70 hover:text-primary transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-white/40 mb-3 md:mb-4">Legal</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/terms" className="hover:text-primary transition">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-primary transition">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-white/40 mb-3 md:mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-white/70 leading-relaxed">
              <li>42, Neuro Avenue</li>
              <li>MG Road, Bengaluru</li>
              <li>+91 12345 67890</li>
              <li>hello@shreeneuro.in</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 md:mt-14 pt-5 md:pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:justify-between gap-3 text-xs text-white/40">
          <div>© {new Date().getFullYear()} Shree Neuro Clinic. All rights reserved.</div>
          <div>Care with conscience.</div>
        </div>
      </div>
    </footer>
  );
}
