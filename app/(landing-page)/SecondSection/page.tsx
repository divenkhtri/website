"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

import { useState } from "react";

const tabs = [
  {
    name: "Data Processing",
    title: "Challenges in Traditional Data Processing",
    feature1:
      "Inefficient handling of vast data volumes with traditional processing approaches.",
    feature2:
      "Limited insights derived from conventional data processing methods.",
    feature3:
      "Challenges posed by outdated data processing approaches in the modern business landscape.",
    image: "/images/dataflow.svg",
  },
  {
    name: "Advanced Analytics",
    title: "Transforming Raw Data Challenges",
    feature1:
      "Data cleansing and validation challenges hinder precise analytics.",
    feature2:
      "Difficulty in seamless integration for sophisticated analytical processes.",
    feature3:
      "Barriers to making informed decisions due to raw data challenges.",
    image: "/images/data analysis.svg",
  },
  {
    name: "Analytical Dashboard",
    title: "Secure Data Visualization and Decision-Making",
    feature1:
      "Lack of role-based access control compromising data visualization security.",
    feature2:
      "Challenges in leveraging AI models for personalized customer interactions.",
    feature3:
      "Manual decision-making leading to inefficiencies in operations and decision processes.",
    image: "/images/tab-3.webp",
  },
  {
    name: "Security and Compliance",
    title: "Ensuring Data Protection and Compliance",
    feature1:
      "Struggling to meet data security standards like AICPA-SOC, ISO, CCPA, Hipaa, GDPR.",
    feature2:
      "Inadequate measures to prevent data leakage and ensure robust data security.",
    feature3:
      "Concerns about platform adherence to the highest security standards in the industry.",
    image: "/images/security.svg",
  },
  {
    name: "AI-Enabled Insights",
    title: "Driving Business Success with AI Strategies",
    feature1:
      "Inefficiencies in optimizing inventory and alert systems without AI-driven insights.",
    feature2:
      "Challenges in enhancing customer engagement through targeted marketing campaigns.",
    feature3:
      "Manual processes for SMS discount alerts without automation based on customer behavior and preferences.",
    image: "/images/tab-1.webp",
  },
];

const SecondSection = () => {
  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center md:py-20 ml-[7rem] mr-[7rem] "
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl  md:text-5xl py-20 hidden md:block"
      >
        See how business use RGS Data-Platform
      </motion.div>
      <div></div>

      <div className="hidden md:flex   items-center justify-center ">
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
            ? "border-b-4 pt-2  pb-4 border-gray-500 text-gray-800"
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
      <div className="pt-10 ml-[7rem] mr-[7rem] hidden md:block">
        {activeTab && (
          <div className="flex   justify-center">
            <div
              style={{ height: "525px", width: "525px" }}
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
          bg-gradient-to-r from-gray-100 to-gray-200
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
