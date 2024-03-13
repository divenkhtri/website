"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const options = [
  {
    index: 0,
    title: "Customer Analytics Dashboard",
    description:
      "Gain deep insights into customer behavior with 42 dashboards covering segments like Customer Preferences, Order History, Financial Interactions, Marketing Engagement, Transaction Trends, Payment Analytics, and Sales Performance. Understand your customers at a granular level to drive personalized strategies and enhance overall customer satisfaction.",
    images: ["/images/dashboard/image1.png", "/images/dashboard/image2.png", "/images/dashboard/image3.png"],
  },
  {
    index: 1,
    title: "Order Management System",
    description:
      "Efficiently streamline order processes with our comprehensive Order Management System. Manage dependencies, ensure timely order fulfillment, and maintain a seamless workflow for your business. From order creation to delivery, our system provides end-to-end visibility and control.",
    images: ["/images/tab-1.webp", "/images/tab-2.webp", "/images/tab-3.webp"],
  },
  {
    index: 2,
    title: "Financial Analytics Dashboard",
    description:
      "Track and analyze financial data with real-time insights to optimize budgeting and financial planning. Our Financial Analytics Dashboard covers key areas such as Revenue Trends, Expense Management, Profitability Analysis, and Budget Performance. Make informed decisions to ensure the financial health of your business.",
    images: ["/images/tab-1.webp", "/images/tab-2.webp", "/images/tab-3.webp"],
  },
  {
    index: 3,
    title: "Marketing Campaign Management",
    description:
      "Deliver impactful marketing strategies with our Campaign Management Dashboard. Plan and execute campaigns seamlessly, quickly refocus strategies based on real-time data, and automate approval processes. Gain a competitive edge by staying agile and responsive in the dynamic field of marketing.",
    images: ["/images/tab-1.webp", "/images/tab-2.webp", "/images/tab-3.webp"],
  },
  {
    index: 4,
    title: "Transactions and Payments Tracking",
    description:
      "Efficiently track transactions and payments to ensure accurate and timely processing. Our system provides detailed insights into Transaction Histories, Payment Processing, Invoice Management, and Financial Transactions. Enhance operational efficiency and financial accuracy with robust tracking capabilities.",
    images: ["/images/tab-1.webp", "/images/tab-2.webp", "/images/tab-3.webp"],
  },
  {
    index: 5,
    title: "Sales Performance Analytics",
    description:
      "Align teams to execute winning sales strategies with our Sales Performance Analytics. Set annual plans, monitor real-time insights into Sales Trends, Customer Interactions, Deal Progress, and Revenue Goals. Empower your sales teams with data-driven insights for effective decision-making and goal achievement.",
    images: ["/images/tab-1.webp", "/images/tab-2.webp", "/images/tab-3.webp"],
  },
];

const ThirdSection = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedOption.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex, selectedOption.images]);

  const handleAccordionChange = (value) => {
    if (selectedOption.title === value) {
      // Collapse the accordion if clicking on the open title
      setSelectedOption(null);
    } else {
      // Open the selected accordion and close others
      setSelectedOption(options.find((option) => option.title === value));
    }
  };

  return (
    <div className="bg-[#28282B] text-white py-10 px-10 space-y-10 items-center justify-center flex flex-col">
      <div className="text-4xl text-center">
        Built to support any data and any workflow
      </div>

      <div className="flex space-x-10 px-10 items-center justify-center">
        <div className="">
          {options.map((option, index) => (
            <Accordion
              key={index}
              type="single"
              defaultValue={selectedOption ? selectedOption.title : null}
              onChange={handleAccordionChange}
            >
              <AccordionItem key={index} value={option.title}>
                <AccordionTrigger
                  className="w-96 text-3xl"
                  value={option.title}
                >
                  {option.title}
                </AccordionTrigger>
                <AccordionContent className="border-b border-blue-500">
                  <div className="md:flex items-center space-x-20">
                    <div className="md:w-1/2 px-10">
                      <div className="text-xl pt-4">{option.description}</div>
                    </div>
                    <div className="">
                      <Image
                        src={option.images[currentImageIndex]}
                        alt="Image"
                        width={500}
                        height={500}
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
