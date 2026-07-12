import { Reveal } from "./Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How do I book an appointment?", a: "Use the Book button, call us, or WhatsApp. Most consultations are confirmed within 24 hours." },
  { q: "Do you accept insurance?", a: "Yes — we work with all major insurance providers and offer cashless facilities for approved plans." },
  { q: "Do I need a referral to see a neurologist?", a: "No referral is required. You can book directly through our clinic." },
  { q: "What should I bring to my first visit?", a: "Any prior imaging (MRI/CT), previous prescriptions, and a list of current medications." },
  { q: "Is emergency care available?", a: "Our stroke response and emergency neurological care are available 24/7." },
  { q: "Do you offer online consultations?", a: "Yes, secure video consultations are available for follow-ups and second opinions." },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-10 md:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-primary/90 mb-4">— FAQ</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-[0.95]">
            Questions, <span className="italic text-gradient">answered.</span>
          </h2>
        </Reveal>

        <Accordion type="single" collapsible className="mt-12 md:mt-16 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass rounded-2xl px-5 md:px-6 border-0"
            >
              <AccordionTrigger className="font-display text-lg md:text-2xl py-5 md:py-6 hover:no-underline text-left">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm md:text-base pb-5 md:pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
