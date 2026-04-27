import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "When does Veeto launch?",
    a: "We're rolling out access in waves over the coming months. Waitlist members get in first.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Everything is end-to-end encrypted. You own your memories. You can delete anything, anytime.",
  },
  {
    q: "How is this different from a notes app?",
    a: "Notes are passive. Veeto actively structures who you met, what mattered, and what to do next — and surfaces it when you need it.",
  },
  {
    q: "Do I need to type anything?",
    a: "No. Just speak. Veeto handles the rest.",
  },
  {
    q: "How much will it cost?",
    a: "Pricing will be announced at launch. Waitlist members get founding-member pricing.",
  },
];

const FaqSection = () => {
  return (
    <section className="relative">
      <div className="veeto-section">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Questions, <span className="veeto-gradient-text">answered.</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="veeto-card !p-0 border-border/50"
              >
                <AccordionTrigger className="px-6 py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
