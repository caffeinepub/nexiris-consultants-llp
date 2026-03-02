import PricingSection from '@/components/annual/PricingSection';
import FAQSection from '@/components/annual/FAQSection';
import { useModal } from '@/App';

export default function AnnualProgram() {
  const { openModal } = useModal();

  return (
    <main className="pt-16 lg:pt-20">
      <PricingSection onEnquire={openModal} />
      <FAQSection />
    </main>
  );
}
