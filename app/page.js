import AboutSec from "./components/aboutSection/AboutSec";
import { AccreditationsSec } from "./components/AccreditationsSec/AccreditationsSec";
import BannerSection from "./components/bannerSection/BannerSection";
import PossibilitySection from "./components/possibilitySec/PossibilitySection";
import TopRankingsSection from "./components/rankingSection/TopRankingSection";
import UniqueSection from "./components/uniqueSection/UniqueSection";
export default function Home() {
  return (
    <>
      <BannerSection />
      <AboutSec/>
      <PossibilitySection/>
      <UniqueSection/>
      <TopRankingsSection/>
      <AccreditationsSec/>
    </>
  );
}
