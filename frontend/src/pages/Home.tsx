import { useModal } from '../App';
import HeroSection from '../components/home/HeroSection';
import ProblemSection from '../components/home/ProblemSection';
import WhatWeDeliverSection from '../components/home/WhatWeDeliverSection';
import TradeScoreSection from '../components/home/TradeScoreSection';
import AnnualProgramSection from '../components/home/AnnualProgramSection';
import CredibilitySection from '../components/home/CredibilitySection';
import FinalCTASection from '../components/home/FinalCTASection';

export default function Home() {
  const { openModal } = useModal();

  return (
    <main>
      <HeroSection onEnquire={openModal} />
      <ProblemSection />
      <WhatWeDeliverSection />
      <TradeScoreSection />
      <AnnualProgramSection onEnquire={openModal} />
      <CredibilitySection />
      <FinalCTASection onEnquire={openModal} />
    </main>
  );
}
