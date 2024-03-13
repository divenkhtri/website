"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const DataQuality = () => {
  const images = ["/images/data/overall.png", "/images/data/totalclan.png"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="py-20 bg-[#097969] text-white px-10 items-center justify-center md:flex">
      <div className="items-center md:w-1/2 pb-20 md:pb-0 space-y-6 justify-center">
        <div className="text-4xl flex">
          Empowering Industries to Enhance Data Quality
        </div>
        <div className="text-2xl md:w-5/6">
          Our platform addresses these data quality challenges head-on,
          providing a robust solution for seamless integration, standardization,
          and advanced processing capabilities. Elevate your data quality,
          enabling it to be a valuable asset for data science and GenAI use.
        </div>
        <Link href='/contact'>
        <div className="p-6 cursor-pointer w-40 rounded-xl text-xl bg-black hover:bg-gray-800 transition duration-300 ease-in-out">
          Get Started
        </div>
        </Link>
      </div>

      <div className="bg-gradient-to-r from-[#292c2c] to-[#06dfbe] rounded-md flex p-2 overflow-hidden relative">
        <Image
          src={images[currentImageIndex]}
          width={500}
          height={700}
          alt={`Data Platform Image ${currentImageIndex + 1}`}
          className="h-[250px] w-[500px] transition-transform ease-in-out duration-500 transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default DataQuality;
