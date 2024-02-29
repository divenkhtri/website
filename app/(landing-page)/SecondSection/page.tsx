"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { useState } from "react";

const tabs = [
  {
    name: "Customer Data Insights",
    title: "Unlock customer targeting potential with actionable insights",
    feature1: "Enhance marketing strategies with Customer Spend Probability Analysis.",
    feature2: "Identify high-value customers for targeted promotions and personalized offers.",
    feature3: "Improve customer engagement with targeted campaigns based on past behavior.",
    image: "/images/tab-1.webp",
  },
  {
    name: "Operational Efficiency",
    title: "Streamline operations for better efficiency",
    feature1: "Optimize order management with role-based access control.",
    feature2: "42 dashboards covering 8 segments with 4 charts and 1 table on average.",
    feature3: "Automated inventory management with threshold alerts and supplier management.",
    image: "/images/tab-2.webp",
  },
  {
    name: "Revenue Maximization",
    title: "Maximize revenue opportunities and prevent losses",
    feature1: "Menu Recommendation Model for personalized customer suggestions.",
    feature2: "Customer Propensity Model to identify and incentivize potential buyers.",
    feature3: "Missed Opportunities Analysis to unlock revenue potential from big spenders.",
    image: "/images/tab-3.webp",
  },
  {
    name: "Data Security & Validation",
    title: "Ensure data integrity and security",
    feature1: "Robust data security measures with a leak-proof pipeline.",
    feature2: "60+ validation and cleaning rules for thorough data validation.",
    feature3: "Secure handling of sensitive information with encrypted data.",
    image: "/images/tab-4.webp",
  },
  {
    name: "AI Integration",
    title: "AI-driven insights for personalized experiences",
    feature1: "Menu Recommendation Model suggests top 3 items based on history.",
    feature2: "Customer Propensity Model tailors marketing strategies for each customer.",
    feature3: "Leverage AI for strategic decision-making and data-driven growth.",
    image: "/images/tab-1.webp",
  },
];

const SecondSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center md:py-20 p-10"
    >
      <div className="flex justify-center items-center">
        <div
          style={{
            transform: `translateY(${isInView ? 0 : 100}px)`,
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="md:flex md:space-x-20 border-b md:py-10"
        >
          <div className="space-y-10">
            <div className="text-3xl">Security and Compliance</div>
            <div className="flex items-center space-x-8 hover:text-blue-500 text-xl">
              Build and manage your pipeline with confidence that your data is
              secure
              <ArrowRight className="h-6 w-6 ml-4" />
            </div>
          </div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="grid grid-cols-2  md:flex md:space-x-10  items-center   justify-center py-10 "
          >
            <Image
              src="/images/logo/aicpa.png"
              width={100}
              height={100}
              alt="logo"
            />
            <Image
              src="/images/logo/iso-logo.png"
              width={100}
              height={100}
              alt="logo"
            />
            <Image
              src="/images/logo/ccpa.svg"
              width={150}
              height={150}
              alt="logo"
            />
            <Image
              src="/images/logo/hipaa.png"
              width={100}
              height={100}
              alt="logo"
            />
            <Image
              src="/images/logo/gdpr.png"
              width={100}
              height={100}
              alt="logo"
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl  md:text-6xl pt-10 py-20 hidden md:block"
      >
        See how business use RGS Data-Platform
      </motion.div>
      <div></div>

      <div className="hidden md:flex  items-center justify-center ">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`
        flex 
        justify-center 
        items-center 
        space-x-10
        w-60
        ${
          activeTab === tab
            ? "border-b-4 pt-2 border-gray-500 text-gray-800"
            : "text-muted-foreground"
        }
        
        `}
            onClick={() => setActiveTab(tab)}
            style={{ cursor: "pointer" }}
          >
            <div className="flex text-3xl text-center items-center h-26 w-26 justify-center">
              <div
                className="
                "
              >
                {tab.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Display content based on the active tab */}
      <div className="pt-10 hidden md:block">
        {activeTab && (
          <div className="flex   justify-center">
            <div
              style={{ height: "525px", width: "700px" }}
              className="flex-col bg-gray-200 p-10 rounded-md"
            >
              <p className="text-4xl py-10 border-b underline ">
                {activeTab.title}
              </p>
              <div className="space-y-10 items-center justify-center">
                <ul className="flex space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-500" />

                  <li>{activeTab.feature1}</li>
                </ul>
                <ul className="flex space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-500" />

                  <li>{activeTab.feature2}</li>
                </ul>
                <ul className="flex space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-gray-500" />

                  <li>{activeTab.feature3}</li>
                </ul>
              </div>
            </div>

            <div
              style={{ height: "525px", width: "700px" }}
              className="
          bg-gradient-to-r from-gray-400 to-gray-100
          items-center justify-center
          rounded-md
          flex

     
      
          
          
          "
            >
              <Image
                src={activeTab.image}
                width={530}
                height={500}
                alt="logo"
                className="
              rounded-md
              
          

          

              
              "
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SecondSection;
