import FirstSection from "./FirstSection/page";
import Navbar from "./Navbar/navbar";
import SecondSection from "@/app/product/SecondSection/page";
import FourthSectionData from "./FourthSectionData/page";
import FifthSectionData from "./FifthSectionData/page";
import SixthSection from "./SixthSection/page";
import SeventhSection from "./SeventhSection/page";
import EighthSection from "./EighthSection/page";
import Footer from "./footer/page";
import ThirdSection from "./ThirdSection/page";

const ProductPage = () => {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSectionData />
      <FifthSectionData />
      <SeventhSection />
    </div>
  );
};

export default ProductPage;
