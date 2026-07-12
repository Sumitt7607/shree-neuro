import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/lib/smooth-scroll";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/cookies")({
  component: CookiesPolicy,
});

function CookiesPolicy() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <Nav />
      
      <main className="container mx-auto max-w-3xl px-6 pt-36 pb-20">
        <Reveal>
          <div className="border-b border-border pb-8 mb-12">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Cookies & Analytics</p>
            <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">Cookie Policy</h1>
            <p className="text-sm text-muted-foreground">Last updated: July 12, 2026</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 font-bold">1. What are Cookies?</h2>
              <p>
                Cookies are small text files stored on your computer or mobile device when you browse websites. They are widely used to make websites work efficiently, remember preferences, and provide analytical data to website operators.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 font-bold">2. How We Use Cookies</h2>
              <p className="mb-3">
                Shree Neuro Clinic uses cookies to improve your digital experience. Specifically, we utilize cookies to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Remember your preferences and form selections between pages.</li>
                <li>Understand how visitors interact with our content to optimize clinic service descriptions.</li>
                <li>Maintain secure session states when requesting or booking appointment blocks.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 font-bold">3. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-foreground font-semibold text-lg mb-1">Essential Cookies</h3>
                  <p>
                    These cookies are necessary for the core functionalities of the website, such as secure forms and scheduling integrations. The site cannot function properly without these.
                  </p>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold text-lg mb-1">Performance & Analytics Cookies</h3>
                  <p>
                    These help us aggregate anonymous usage statistics, such as page visits and click-through rates. This data allows us to refine our website structure and deliver clearer clinical information.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 font-bold">4. Controlling Cookies</h2>
              <p className="mb-3">
                Most web browsers allow you to manage cookie settings. You can configure your browser to block cookies or notify you when a cookie is set.
              </p>
              <p>
                Please note that blocking essential cookies may disable key website functions, such as online appointment booking forms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 font-bold">5. Policy Modifications</h2>
              <p>
                We may modify this Cookie Policy from time to time to reflect updates in website tools or regulations. Any changes will be posted on this page with an updated modification date.
              </p>
            </section>
          </div>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
}
