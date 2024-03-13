import EighthSection from "./EighthSection/page";
import FifthSection from "./FifthSection/page";
import FirstSection from "./FirstSection/page";
import FourthSection from "./FourthSection/page";
import SecondSection from "./SecondSection/page";
import SeventhSection from "./SeventhSection/page";
import SixthSection from "./SixthSection/page";
import ThirdSection from "./ThirdSection/page";
import SecurityPage from './SecurityPage/page'
import FourthSectionData from "../product/FourthSectionData/page";
import FifthSectionData from "../product/FifthSectionData/page";
const LandingPage = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FourthSectionData />
      <FifthSectionData />
      <FifthSection />
      <SixthSection />
      <SecurityPage />
      <SeventhSection />
      <EighthSection />
    </div>
  );
};

export default LandingPage;
