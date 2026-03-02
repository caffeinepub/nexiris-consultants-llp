import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const faqs = [
  {
    question: 'What is included in a Nexiris Global trade verification report?',
    answer:
      'Each report covers eight dimensions: entity verification (including MCA verification), compliance screening, document authentication, financial due diligence, trade route analysis, regulatory compliance review, Trade Trust Score™, and an executive summary report.',
  },
  {
    question: 'How long does a verification take?',
    answer:
      'Standard reports are delivered within 3–5 business days. Annual Program subscribers receive priority processing with a 48-hour turnaround for most verifications.',
  },
  {
    question: 'Is the Annual Program suitable for small businesses?',
    answer:
      'Yes. The Annual Program is designed for businesses of all sizes that engage in regular international trade with Indian exporters. With up to 10 verifications per year and a dedicated account manager, it provides significant value for growing importers and buyers.',
  },
  {
    question: 'How is the Trade Trust Score™ calculated?',
    answer:
      'The Trade Trust Score™ is a proprietary composite index that weights five verification dimensions — entity, compliance, documents, financial health, and route risk — using a methodology developed over 15 years of trade intelligence practice.',
  },
  {
    question: 'Can I request a verification for any Indian exporter?',
    answer:
      'Nexiris Global specialises in Indian exporter verification and counterparty risk intelligence for international buyers. We cover counterparties across India and can verify exporters in over 40 countries. Contact us to confirm availability for your specific trade route.',
  },
  {
    question: 'What happens if I need more than 10 verifications under the Annual Program?',
    answer:
      'Additional verifications beyond the annual allocation are available at a discounted rate of $499 per report for Annual Program subscribers. Contact your account manager to arrange additional capacity.',
  },
];

export default function FAQSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-6">
        <div
          ref={titleRef}
          className={`scroll-animate text-center mb-12 ${titleVisible ? 'is-visible' : ''}`}
        >
          <h2 id="faq-heading" className="font-heading font-bold text-3xl md:text-4xl text-brand-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-dark/60 text-base">
            Everything you need to know about Nexiris Global verification services.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-brand-mintyBlue/15 rounded-lg px-5 bg-white shadow-card"
            >
              <AccordionTrigger className="font-heading font-semibold text-brand-dark text-sm py-4 hover:text-brand-mintyBlue hover:no-underline text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-brand-dark/60 text-sm leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
