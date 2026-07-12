import { Reveal } from "./Reveal";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export function Visit() {
  return (
    <section id="visit" className="relative py-10 md:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-primary/90 mb-4">— Visit us</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95] max-w-3xl">
            Visit our <span className="italic text-gradient">clinic.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mt-12 md:mt-16">
          {/* Map Embed */}
          <div className="rounded-3xl overflow-hidden glass aspect-[4/3] relative">
            <iframe
              title="Shree Neuro Clinic Location"
              src="https://maps.google.com/maps?q=20.466952626497427,85.89679305158471&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info Card */}
          <div className="glass rounded-3xl p-6 md:p-10 space-y-5 md:space-y-6">
            {[
              { icon: MapPin, label: "Address", value: "1st Floor, Ananda Varsha, above DCB Bank, Ice Factory Road, College Square, Cuttack, Odisha 753003" },
              { icon: Clock, label: "Hours", value: "Mon–Sat · 9:00 AM – 8:00 PM · Emergencies 24/7" },
              { icon: Phone, label: "Phone", value: "+91 99385 41722" },
              { icon: Mail, label: "Email", value: "neurologyclinic2222@gmail.com" },
            ].map((i) => (
              <div key={i.label} className="flex gap-4 items-start">
                <span className="w-10 h-10 shrink-0 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow">
                  <i.icon className="w-4 h-4 text-primary-foreground" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{i.label}</div>
                  <div className="font-display text-base md:text-xl mt-1">{i.value}</div>
                </div>
              </div>
            ))}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=20.466952626497427,85.89679305158471"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-2 rounded-full bg-gradient-primary text-primary-foreground font-medium px-6 py-3 shadow-glow hover:opacity-90 transition text-sm w-full sm:w-auto justify-center"
            >
              Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
