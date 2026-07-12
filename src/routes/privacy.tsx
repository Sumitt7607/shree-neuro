import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/lib/smooth-scroll";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
});

function Privacy() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <Nav />
      
      <main className="container mx-auto max-w-3xl px-6 pt-36 pb-20">
        <Reveal>
          <div className="border-b border-border pb-8 mb-12">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Patient Security</p>
            <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">Last updated: July 12, 2026</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 font-bold">1. Patient Confidentiality</h2>
              <p>
                At Shree Neuro Clinic, patient confidentiality is our utmost priority. All clinical records, histories, and personal identifiers are stored and protected under strict medical privacy standards and aligned with national digital healthcare regulations.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 font-bold">2. Information We Collect</h2>
              <p className="mb-3">
                To coordinate and provide neurological care, we collect the following information:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Personal identity info: full name, age, gender.</li>
                <li>Contact info: phone number, email address, physical address.</li>
                <li>Medical info: neurological symptoms, prior diagnoses, laboratory tests, and medications.</li>
                <li>Website interaction data: analytics details gathered for website optimization.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 font-bold">3. How We Use Your Data</h2>
              <p className="mb-3">
                Your medical and personal information is strictly used for:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Scheduling clinical appointments and sending reminders.</li>
                <li>Formulating personalized neurological treatment and rehabilitation plans.</li>
                <li>Communicating medical reports and lab results.</li>
                <li>Facilitating secure online communications.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 font-bold">4. Data Sharing & Security</h2>
              <p className="mb-3">
                <strong>We do not sell, rent, or lease your personal information to third parties.</strong>
              </p>
              <p>
                Medical information is only shared with authorized medical laboratories or peer specialists when referred by Dr. Sen for the exclusive purpose of diagnostic evaluation or collaborative care. We employ enterprise-grade encryption and access controls to secure patient portals and local systems.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 font-bold">5. Your Access and Rights</h2>
              <p>
                You have the right to request access to your clinical records, correct any inaccuracies, or request the transfer of your files to another provider. Please contact our administrative desk to verify your identity and initiate clinical record requests.
              </p>
            </section>
          </div>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
