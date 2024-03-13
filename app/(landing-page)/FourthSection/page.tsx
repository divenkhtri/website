"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const images = [
  {
    src: "/images/tab-1.webp",
  },
  {
    src: "/images/tab-1.webp",
  },
  {
    src: "/images/tab-1.webp",
  },
];

const FourthSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col space-y-10 items-center justify-center px-20">
      <div className="flex py-20">
        <div className="space-y-6 flex flex-col">
          <div className="text-gray-800 text-xl px-10">
            Unlock your data's hidden potential
          </div>
          <div className="text-4xl w-96 px-10">Simplify Complex Workflows</div>
          <div className="text-xl text-gray-600 px-10">
            Data harmonization, standardization, and <br /> enable data science
            with 50+ analytical dashboards seamlessly.
          </div>

          <div className="md:flex items-center md:space-x-60 space-y-10 p-10">
            <div className="">
              <Image
                src="/images/ingestion.svg"
                alt="Data Ingestion"
                width={400}
                height={400}
              />
            </div>

            <div className="space-y-10 ">
              <div className="text-3xl">Data Ingestion</div>
              <div className="w-96 text-xl text-gray-600">
              Seamlessly integrate diverse data sources, ensuring a smooth and automated process for bringing in data, making it readily available for analysis. Our ingestion process supports various data formats and protocols, providing flexibility for your data sources.
              </div>
            </div>
          </div>

          <div className="md:flex items-center md:space-x-60 space-y-10 p-10">
            <div className="">
              <Image
                src="/images/dataprocessing.png"
                alt="Data Processing"
                width={400}
                height={400}
              />
            </div>

            <div className="space-y-10 ">
              <div className="text-3xl">Data Processing</div>
              <div className="w-96 text-xl text-gray-600">
              Utilize distributed processing capabilities with GCP tools for efficient data transformation and analysis. Our processing workflows ensure scalability and speed, allowing you to handle large datasets with ease.
              </div>
            </div>
          </div>

          <div className="md:flex items-center md:space-x-60 space-y-10 p-10">
            <div className="">
              <Image
                src="/images/harmony.png"
                alt="Data Harmonisation"
                width={400}
                height={400}
              />
            </div>
            <div className="space-y-10 ">
              <div className="text-3xl">Data Harmonisation</div>
              <div className="w-96 text-xl text-gray-600">
              Structure your data and harmonize it to unlock valuable insights. Our harmonization process ensures that your data is organized, consistent, and ready for comprehensive analysis, allowing you to derive meaningful conclusions and make informed decisions.
              </div>
            </div>
          </div>

          <div className="md:flex items-center md:space-x-60 space-y-10 p-10">
            <div className="">
              <Image
                src="/images/dataaa.png"
                alt="Data Visualization"
                width={400}
                height={400}
                
              />
            </div>

            <div className="space-y-10">
              <div className="text-3xl">Data Visualization</div>
              <div className="w-96 text-xl text-gray-600">
              <ul>
        <li>Unlock industrial-specific KPIs with 50+ dashboard metrics.</li>
        <li>Efficiently analyze and interpret complex data sets using our interactive and customizable charts and graphs.</li>
        <li>Create tailored visualizations that suit your specific business needs and enhance decision-making.</li>
      </ul>
              </div>
            </div>
          </div>

          <div className="md:flex items-center md:space-x-60 space-y-10 p-10">
            <div className="">
              <Image
                src="/images/science.png"
                alt="Data Science & AI/ML"
                width={400}
                height={400}
                className="h-[330px] w-[400px]"
              />
            </div>

            <div className="space-y-10 ">
              <div className="text-3xl">Data Science & AI/ML</div>
              <div className="w-96 text-xl text-gray-600">
              Enable data science along with AI/ML models out-of-the-box. Leverage our pre-built models or integrate your own, empowering your organization with advanced analytics and predictive capabilities.
              </div>
            </div>
          </div>
<Link href='/product'>
          <Button className="w-[10rem] p-[2rem] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-300">
            Explore All Features
          </Button>
</Link>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
