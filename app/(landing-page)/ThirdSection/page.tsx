"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";

const ThirdSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <motion.div
        ref={ref}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 4 }}
        className="flex flex-col space-y-10 "
      >
        <div className="py-20 bg-[#097969] items-center flex flex-col space-y-10">
          <div className="text-white text-4xl px-10 md:px-0  md:text-6xl md:pb-10 flex items-start justify-start ">
            Why companies choose RGS Data-Platform
          </div>
          <div className="md:w-3/4 px-10">
            <div className="flex space-x-10 md:space-x-20 text-white items-center text-2xl justify-center border-b border-t py-10">
              <CheckCircle2 className="md:h-20 md:w-20 h-10 w-10 " />
              <div className="md:w-80 md:text-3xl text-md w-72">
                The only platform designed for restaurant analytics
              </div>
              <div className="md:w-1/2 hidden md:block">
                RGS Data-Platform provides a comprehensive solution for restaurant analytics, integrating data from BigQuery and offering 42 dashboards covering key segments like Customer, Order, Finance, Marketing, Transactions, Payments, and more.
              </div>
            </div>
            <div className="flex space-x-10 md:space-x-20 text-white items-center justify-center  text-2xl border-b border-t py-10">
              <CheckCircle2 className="md:h-20 md:w-20 w-10 h-10 " />
              <div className="md:w-80 md:text-3xl text-md w-72">
                Boost cross-team collaboration for better insights
              </div>
              <div className="md:w-1/2 hidden md:block">
                RGS Data-Platform is recognized for its excellence in facilitating cross-team collaboration, allowing different departments to seamlessly work together for more informed decision-making.
              </div>
            </div>
            <div className="flex space-x-10 md:space-x-20 text-white items-center justify-center text-2xl border-b border-t py-10">
              <CheckCircle2 className="md:h-20 md:w-20 h-10 w-10 " />
              <div className="md:w-80 md:text-3xl text-md w-72">
                Hassle-free adoption with minimal downtime
              </div>
              <div className="md:w-1/2 hidden md:block">
                RGS Data-Platform ensures a smooth transition by providing tailored support, helping teams migrate existing data seamlessly and adopt the platform with minimal downtime.
              </div>
            </div>
            <Link href="/platformdemo">
              <div className="bg-gray-200 p-6 w-52 rounded-lg mt-10 items-center justify-center flex">
                See how it works
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThirdSection;
