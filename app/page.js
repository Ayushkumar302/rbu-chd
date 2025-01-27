import AboutSec from "./components/aboutSection/AboutSec";
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
    </>
  );
}
