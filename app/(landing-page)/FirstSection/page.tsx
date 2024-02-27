"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import data from "./data.json";
const FirstSection = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section
      className="md:py-20 py-10  space-y-10
    bg-[#E5E4E2] 
    
    
    "
    >
      <div className="container mx-auto text-center md:w-1/2">
        <div
          className="text-6xl flex justify-center md:text-6xl   md:px-20 pb-10
         

        
        
        "
        >
          The best platform for cross-functional work
        </div>

        <p
          className="text-lg md:text-xl mb-10         
        "
        >
          Want more efficiency in your organization? Bird is easy for all teams
          to use, so you can deliver quality work, faster.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-[#000] text-white px-6 py-3 rounded-sm ">
            Get Started
          </button>
          <Link href="/Contact">
            <button className="bg-gray-500 text-white px-6 py-3 rounded-sm">
              See how it works
            </button>
          </Link>
        </div>
      </div>

      <div className=" items-center space-y-10   md:flex  justify-center md:mx-auto md:space-x-10">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="px-10 md:px-0"
        >
          <Lottie
            options={{ ...lottieOptions, animationData: data }}
            height={700}
            width="auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FirstSection;
