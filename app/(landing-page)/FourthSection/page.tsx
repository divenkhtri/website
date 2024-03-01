"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";

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
            DRIVE EFFICIENCY ACROSS TEAMS
          </div>
          <div className="text-4xl w-96 px-10">Simplify Complex Workflows</div>
          <div className="text-xl text-gray-600 px-10">
            Connect tasks, responsibilities, and execution seamlessly.
          </div>

          <div className="md:flex items-center md:space-x-60 space-y-10 p-10">
            <div className="">
              <Image
                src="/images/tab-1.webp"
                alt="Data Ingestion"
                width={700}
                height={700}
              />
            </div>

            <div className="space-y-10 border-b">
              <div className="text-3xl">Data Ingestion</div>
              <div className="w-96 text-xl text-gray-600">
                Seamlessly integrate diverse data sources, including databases,
                APIs, streaming platforms, and cloud storage.
              </div>
              <div className="flex">
                <div className="text-lg">Explore Data Ingestion</div>
                <ArrowRight className="h-6 w-6 ml-4" />
              </div>
            </div>
          </div>

          <div className="md:flex items-center md:space-x-60 space-y-10 p-10">
            <div className="">
              <Image
                src="/images/tab-1.webp"
                alt="Data Storage"
                width={700}
                height={700}
              />
            </div>

            <div className="space-y-10 border-b">
              <div className="text-3xl">Data Storage</div>
              <div className="w-96 text-xl text-gray-600">
                Utilize scalable and secure data storage supporting both
                structured and unstructured data.
              </div>
              <div className="flex">
                <div className="text-lg">Explore Data Storage</div>
                <ArrowRight className="h-6 w-6 ml-4" />
              </div>
            </div>
          </div>

          <div className="md:flex items-center md:space-x-60 space-y-10 p-10">
            <div className="">
              <Image
                src="/images/tab-1.webp"
                alt="Data Processing"
                width={700}
                height={700}
              />
            </div>

            <div className="space-y-10 border-b">
              <div className="text-3xl">Data Processing</div>
              <div className="w-96 text-xl text-gray-600">
                Utilize distributed processing capabilities with GCP tools for
                efficient data transformation and analysis.
              </div>
              <div className="flex">
                <div className="text-lg">Explore Data Processing</div>
                <ArrowRight className="h-6 w-6 ml-4" />
              </div>
            </div>
          </div>
          <div className="md:flex items-center md:space-x-60 space-y-10 p-10">
            <div className="">
              <Image
                src="/images/tab-1.webp"
                alt="Data Processing"
                width={700}
                height={700}
              />
            </div>

            <div className="space-y-10 border-b">
              <div className="text-3xl">Data Analytics & AI</div>
              <div className="w-96 text-xl text-gray-600">
                Advanced analytics and machine learning capabilities for gaining
                actionable insights and predictive analytics.
              </div>
              <div className="flex">
                <div className="text-lg">Explore Data Processing</div>
                <ArrowRight className="h-6 w-6 ml-4" />
              </div>
            </div>
          </div>
          <div className="md:flex items-center md:space-x-60 space-y-10 p-10">
            <div className="">
              <Image
                src="/images/tab-1.webp"
                alt="Data Processing"
                width={700}
                height={700}
              />
            </div>

            <div className="space-y-10 border-b">
              <div className="text-3xl">Data Visualization</div>
              <div className="w-96 text-xl text-gray-600">
                Intuitive and interactive visualizations to explore and
                communicate data findings effectively..
              </div>
              <div className="flex">
                <div className="text-lg">Explore Data Processing</div>
                <ArrowRight className="h-6 w-6 ml-4" />
              </div>
            </div>
          </div>
          <Button className="w-[10rem] p-[2rem] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-300">
  Explore All Features
</Button>

        </div>
      </div>
    </div>
  );
};

export default FourthSection;
