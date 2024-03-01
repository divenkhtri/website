"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { useState } from "react";

const tabs = [
  {
    name: "Data Processing",
    title: "Unlock the Full Potential of Your Data",
    feature1: "Efficiently manage and derive insights from vast data volumes.",
    feature2: "Overcome challenges posed by traditional data processing approaches.",
    feature3: "Empower your business with a robust data platform.",
    image:  "/images/tab-1.webp",
  },
  {
    name: "Advanced Analytics",
    title: "Transform Raw Data into Actionable Insights",
    feature1: "Cleanse and validate data with 120+ rules for precision.",
    feature2: "Enable seamless integration for sophisticated analytics.",
    feature3: "Drive informed decisions with real-time data visualization.",
    image:  "/images/tab-2.webp",
  },
  {
    name: "AI-driven Dashboards",
    title: "Elevate Decision-Making with AI Insights",
    feature1: "Experience role-based access control for secure data visualization.",
    feature2: "Leverage AI models for personalized customer interactions and recommendations.",
    feature3: "Automate decision-making for streamlined operations and increased efficiency.",
    image:  "/images/tab-3.webp",
  },
  {
    name: "Security and Compliance",
    title: "Protect Your Data with Confidence",
    feature1: "Ensure data security with GCP compliance standards - AICPA-SOC, ISO, CCPA, Hipaa, GDPR.",
    feature2: "Implement a robust pipeline for data security and prevention of data leakage.",
    feature3: "Stay confident with a platform that adheres to the highest security standards.",
    image: "/images/tab-4.webp",
  },
  {
    name: "AI-Enabled Insights",
    title: "Drive Business Success with AI-driven Strategies",
    feature1: "Optimize inventory and alert systems with AI-driven insights.",
    feature2: "Enhance customer engagement through targeted marketing campaigns using AI models.",
    feature3: "Automate SMS discount alerts based on customer behavior and preferences.",
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
