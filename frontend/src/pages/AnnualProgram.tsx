import PricingSection from '@/components/annual/PricingSection';
import FAQSection from '@/components/annual/FAQSection';
import { useModal } from '@/App';

export default function AnnualProgram() {
  const { openModal } = useModal();

  return (
    <main className="relative pt-20">
      {/* Ambient background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div
          className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, oklch(0.78 0.14 75 / 0.12) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, oklch(0.55 0.10 260 / 0.15) 0%, transparent 70%)',
          }}
        />
      </div>

      <PricingSection onEnquire={openModal} />
      <FAQSection />
    </main>
  );
}
