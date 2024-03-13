"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const SecurityPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center md:pb-2 px-10"
    >
      <div className="flex justify-center items-center">
        <div
          style={{
            transform: `translateY(${isInView ? 0 : 100}px)`,
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="md:flex md:space-x-20 md:py-10"
        >
          <div className="space-y-10">
            <div className="text-3xl">Security and Compliance</div>
            <div className="flex items-center space-x-8 hover:text-blue-500 text-xl">
              Oversee your data with the assurance of security through <br />
              Google Cloud Platform Security.
              <ArrowRight className="h-6 w-6 ml-4" />
            </div>
          </div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="grid grid-cols-2  md:flex md:space-x-10  items-center   justify-center "
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
    </div>
  );
};

export default SecurityPage;
