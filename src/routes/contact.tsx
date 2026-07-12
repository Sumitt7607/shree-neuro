import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/lib/smooth-scroll";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact Us | Shree Neuro Clinic — Book Your Appointment" },
      {
        name: "description",
        content:
          "Contact Shree Neuro Clinic to book a neurology consultation. Call, email, or fill our form. Most appointments confirmed within 24 hours.",
      },
    ],
  }),
});

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: MapPin, label: "Address", value: "1st Floor, Ananda Varsha, above DCB Bank, Ice Factory Road, College Square, Cuttack, Odisha 753003" },
    { icon: Clock, label: "Hours", value: "Mon–Sat · 9:00 AM – 8:00 PM · Emergencies 24/7" },
    { icon: Phone, label: "Phone", value: "+91 99385 41722", href: "tel:+919938541722" },
    {
      icon: Mail,
      label: "Email",
      value: "neurologyclinic2222@gmail.com",
      href: "mailto:neurologyclinic2222@gmail.com",
    },
  ];

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <Nav />

      {/* Hero */}
      <section className="pt-36 pb-12 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/6 blur-3xl -z-10" />
        <div className="container mx-auto max-w-5xl">
          <Breadcrumbs crumbs={[{ label: "Contact", href: "/contact" }]} />
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-primary/90 mt-6 mb-4">
              — Get in touch
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl leading-[0.9] max-w-4xl">
              We are here <span className="italic text-gradient">for you.</span>
            </h1>
            <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Book a consultation, ask a question, or find your way to our clinic. Most appointments
              are confirmed within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main grid */}
      <section className="pb-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-[1fr_1.2fr] gap-8">
          {/* Contact info */}
          <div className="space-y-5">
            {contactInfo.map((c) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass rounded-2xl p-5 flex gap-4 items-start"
              >
                <span className="w-10 h-10 shrink-0 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                  <c.icon className="w-4 h-4 text-white" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    {c.label}
                  </div>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="font-display text-base hover:text-primary transition"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <div className="font-display text-base">{c.value}</div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3] relative glass">
              <iframe
                title="Shree Neuro Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0055523946994!2d77.6093!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1720000000000"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-primary grid place-items-center shadow-glow">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-display text-3xl">Message received!</h2>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Thank you for reaching out. Our team will confirm your appointment within 24
                  hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", phone: "", email: "", message: "" });
                  }}
                  className="mt-4 text-sm text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-display text-3xl md:text-4xl mb-2">Book a consultation</h2>
                <p className="text-muted-foreground text-sm mb-8">
                  Fill in your details and we will get back to you shortly.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition placeholder:text-muted-foreground/60"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                      >
                        Phone *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition placeholder:text-muted-foreground/60"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition placeholder:text-muted-foreground/60"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-widest text-muted-foreground mb-2"
                    >
                      Message / Symptoms
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Please describe your symptoms or reason for visit..."
                      className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm outline-none focus:border-primary transition placeholder:text-muted-foreground/60 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-primary text-white font-semibold py-3.5 rounded-full hover:opacity-90 transition disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. Your information is never shared.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
