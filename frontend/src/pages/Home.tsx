import HeroSection from '@/components/home/HeroSection';
import ProblemSection from '@/components/home/ProblemSection';
import WhatWeDeliverSection from '@/components/home/WhatWeDeliverSection';
import TradeScoreSection from '@/components/home/TradeScoreSection';
import AnnualProgramSection from '@/components/home/AnnualProgramSection';
import CredibilitySection from '@/components/home/CredibilitySection';
import FinalCTASection from '@/components/home/FinalCTASection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import { useModal } from '@/App';

export default function Home() {
  const { openModal } = useModal();

  return (
    <div className="min-h-screen">
      <HeroSection onEnquire={openModal} />
      <ProblemSection />
      <TradeScoreSection />
      <WhatWeDeliverSection />
      <HowItWorksSection />
      <AnnualProgramSection onEnquire={openModal} />
      <CredibilitySection />
      <FinalCTASection onEnquire={openModal} />
    </div>
  );
}
