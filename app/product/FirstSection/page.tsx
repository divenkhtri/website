"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FirstSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState(""); // Add state for video URL

  const openModal = (videoUrl: any) => {
    setVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setVideoUrl("");
    setIsModalOpen(false);
  };

  return (
    <div>
    <div className="  md:flex md:space-x-20 py-20 space-y-10 items-center  justify-center  ">
      <div className=" space-y-10 flex flex-col  md:w-1/3 px-10 ">
        <div className="text-6xl ">
          The #1 software in product and project management
        </div>
        <div className="text-2xl ">
          RGA Data Platform connects company-wide goals to the work needed to
          achieve them—across teams and functions.
        </div>

        <div className="flex space-x-4 ">
            <Link href="/contact">
              <div className="hover:bg-gray-800 bg-black p-4 text-white text-xl rounded-md cursor-pointer transition duration-300">
                Get Started
              </div>
            </Link>
            <div
              className="border hover:bg-gray-100 hover:border-gray-300 p-4 text-xl rounded-md cursor-pointer transition duration-300"
              onClick={() =>
                openModal(
                  "https://storage.googleapis.com/rgs-tech-website-video-files/updated.mp4"
                )
              }
            >
              View Demo
            </div>
          </div>
        </div>

        <Image
          src="/images/tab-6.png"
          alt="Image"
          width={700}
          height={700}
          className="rounded-md shadow-md"
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75">
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-md w-[65%] h-[65%] flex items-center justify-center">
            <div className="bg-white p-8 rounded-md">
              {/* Video modal content */}
              {videoUrl && (
                <div>
                  <video controls width="100%" height="auto">
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              <div className="flex justify-end mt-4">
                <button
                  className="bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-md mr-2 transition duration-300"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstSection;
