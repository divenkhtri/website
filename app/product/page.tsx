import FirstSection from "./FirstSection/page";
import SecondSection from "@/app/product/SecondSection/page";
import FourthSectionData from "./FourthSectionData/page";
import FifthSectionData from "./FifthSectionData/page";
import SeventhSection from "./SeventhSection/page";
import ThirdSection from "./ThirdSection/page";
import EighthSection from "../(landing-page)/EighthSection/page";

const ProductPage = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSectionData />
      <FifthSectionData />
      <SeventhSection />
      <EighthSection />

    </div>
  );
};

export default ProductPage;
