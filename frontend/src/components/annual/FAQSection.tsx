import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is the Trade Trust Score™?',
    answer:
      'The Trade Trust Score™ is a proprietary intelligence metric developed by Nexiris Global that synthesizes financial data, regulatory records, trade history, and counterparty network analysis into a single, actionable score ranging from 0–100.',
  },
  {
    question: 'How long does a report take?',
    answer:
      'Standard reports are delivered within 5 business days. Annual Program subscribers receive priority processing with 3-business-day delivery. Rush options are available upon request.',
  },
  {
    question: 'What data sources do you use?',
    answer:
      'We access 50+ proprietary and public data sources including financial databases, regulatory filings, trade records, sanctions lists, and our proprietary counterparty network database spanning 40+ countries.',
  },
  {
    question: 'Is the Annual Program suitable for SMEs?',
    answer:
      'Yes. The Annual Program is designed to scale with your trade volume. We offer flexible packages for businesses ranging from emerging exporters to established multinational traders.',
  },
  {
    question: 'How is Nexiris Global different from a credit bureau?',
    answer:
      'Unlike generic credit bureaus, Nexiris Global is purpose-built for cross-border trade intelligence. We account for jurisdictional risk, documentation integrity, trade-specific financial patterns, and counterparty network quality — factors that standard credit scores ignore.',
  },
  {
    question: 'Can I request a report on any company globally?',
    answer:
      'We cover entities in 40+ countries with active trade corridors. Coverage varies by jurisdiction. Contact us to confirm availability for your specific counterparty.',
  },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-nexiris-darker relative">
      <div className="max-w-3xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 scroll-animate ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-nexiris-lighter mb-4">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-nexiris-light text-lg">
            Everything you need to know about our intelligence services.
          </p>
        </div>

        <div className={`scroll-animate ${isVisible ? 'visible' : ''}`}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-nexiris-navy border border-nexiris-slate/50 rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 font-montserrat font-semibold text-nexiris-lighter hover:text-gold-400 hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-nexiris-light text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
