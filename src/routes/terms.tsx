import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/lib/smooth-scroll";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/terms")({
  component: Terms,
});

function Terms() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <Nav />
      
      <main className="container mx-auto max-w-3xl px-6 pt-36 pb-20">
        <Reveal>
          <div className="border-b border-border pb-8 mb-12">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Legal Information</p>
            <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">Terms of Service</h1>
            <p className="text-sm text-muted-foreground">Last updated: July 12, 2026</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 font-bold">1. Agreement to Terms</h2>
              <p>
                Welcome to Shree Neuro Clinic. By accessing our website, booking appointments, or engaging with our clinical services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 font-bold">2. Medical Disclaimer</h2>
              <p className="mb-3">
                The information provided on this website—including articles, patient stories, and service descriptions—is for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p>
                Always seek the advice of a qualified neurologist or health professional regarding any medical condition or symptoms you are experiencing.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 font-bold">3. Appointment Bookings & Cancellations</h2>
              <p className="mb-3">
                Appointments can be requested online or via phone. We value your time and allocate dedicated slots for each consultation.
              </p>
              <p>
                If you need to reschedule or cancel an appointment, please notify us at least 24 hours in advance. Repeated no-shows or late cancellations may result in booking restrictions or cancellation fees.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 font-bold">4. Conduct and Responsibility</h2>
              <p>
                Patients and visitors are expected to maintain a respectful demeanor within the clinic and in all digital communications. Shree Neuro Clinic reserves the right to refuse service or cancel ongoing treatments in instances of abusive behavior or non-compliance with treatment recommendations.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 font-bold">5. Intellectual Property</h2>
              <p>
                All content, logo designs, custom animations, imagery, and text on this website are the intellectual property of Shree Neuro Clinic and may not be copied, reproduced, or redistributed without written authorization.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 font-bold">6. Updates to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated modification date. Your continued use of our services constitutes acceptance of the modified Terms of Service.
              </p>
            </section>
          </div>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
