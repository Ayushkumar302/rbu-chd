import AboutSec from "./components/home/aboutSection/AboutSec";
import { AccreditationsSec } from "./components/home/AccreditationsSec/AccreditationsSec";
import BannerSection from "./components/home/bannerSection/BannerSection";
import EmpoweringSec from "./components/home/empoweringSec/empoweringSec";
import PossibilitySection from "./components/home/possibilitySec/PossibilitySection";
import { RankedSec } from "./components/home/rankedSec/rankedSec";
import TopRankingsSection from "./components/home/rankingSection/TopRankingSection";
import RecruitersSec from "./components/home/recruitersSec/RecruitersSec";
import UniqueSection from "./components/home/uniqueSection/UniqueSection";
export default function Home() {
  return (
    <>
      <BannerSection />
      <AboutSec/>
      <PossibilitySection/>
      <UniqueSection/>
      <TopRankingsSection/>
      <AccreditationsSec/>
      <RankedSec/>
      <RecruitersSec/>
      <EmpoweringSec/>
    </>
  );
}
