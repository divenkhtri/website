"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

const images = [
  {
    src: "/images/tab-1.webp",
  },
  {
    src: "/images/tab-2.webp",
  },
  {
    src: "/images/tab-3.webp",
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
          <div className="text-4xl w-96 px-10">Manage complex work easily</div>
          <div className="text-xl text-gray-600 px-10">
            Connect what needs to get done, who is responsible, and how to get
            it done.
          </div>

          <div className="md:flex items-center md:space-x-60 space-y-10 p-10">
            <div className="">
              <Image
                src="/images/tab-1.webp"
                alt="Customer Dashboard"
                width={700}
                height={700}
              />
            </div>

            <div className="space-y-10 border-b">
              <div className="text-3xl">Customer Dashboard</div>
              <div className="w-96 text-xl text-gray-600">
                Gain insights into customer behavior with 42 dashboards covering
                segments like Customer, Order, Finance, Marketing, and more.
              </div>
              <div className="flex">
                <div className="text-lg">Explore Dashboards</div>
                <ArrowRight className="h-6 w-6 ml-4" />
              </div>
            </div>
          </div>

          <div className="md:flex items-center md:space-x-60 space-y-10 p-10">
            <div className="">
              <Image
                src="/images/tab-2.webp"
                alt="Order Management"
                width={700}
                height={700}
              />
            </div>

            <div className="space-y-10 border-b">
              <div className="text-3xl">Order Management</div>
              <div className="w-96 text-xl text-gray-600">
                Streamline order processes, manage dependencies, and ensure a
                smooth workflow for your restaurant.
              </div>
              <div className="flex">
                <div className="text-lg">Explore Orders</div>
                <ArrowRight className="h-6 w-6 ml-4" />
              </div>
            </div>
          </div>

          <div className="md:flex items-center md:space-x-60 space-y-10 p-10">
            <div className="">
              <Image
                src="/images/tab-3.webp"
                alt="Inventory Management"
                width={700}
                height={700}
              />
            </div>

            <div className="space-y-10 border-b">
              <div className="text-3xl">Inventory Management</div>
              <div className="w-96 text-xl text-gray-600">
                Set limits, receive alerts, and efficiently manage your
                restaurant's inventory to avoid shortages and optimize costs.
              </div>
              <div className="flex">
                <div className="text-lg">Explore Inventory</div>
                <ArrowRight className="h-6 w-6 ml-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
