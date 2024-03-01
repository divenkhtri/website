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
                Managing vast data volumes efficiently
              </div>
              <div className="md:w-1/2 hidden md:block">
                <li>
                  RGS Data-Platform offers robust data processing capabilities
                  that efficiently manage and derive insights from vast data
                  volumes.
                </li>
                <br />
                <li>
                  Utilizes advanced data standardization and cleaning processes
                  to handle large-scale data seamlessly. data.
                </li>
              </div>
            </div>
            <div className="flex space-x-10 md:space-x-20 text-white items-center justify-center  text-2xl border-b border-t py-10">
              <CheckCircle2 className="md:h-20 md:w-20 w-10 h-10 " />
              <div className="md:w-80 md:text-3xl text-md w-72">
                Struggling with outdated data processing approaches
              </div>
              <div className="md:w-1/2 hidden md:block">
                <li>
                  RGS Data-Platform revolutionizes data processing by adopting
                  modern, scalable methods that overcome the limitations of
                  traditional approaches.
                </li>
                <br />
                <li>
                  Integrates cutting-edge technologies to ensure data processing
                  is dynamic, responsive, and tailored to the demands of
                  contemporary data requirements.
                </li>
              </div>
            </div>
            <div className="flex space-x-10 md:space-x-20 text-white items-center justify-center text-2xl border-b border-t py-10">
              <CheckCircle2 className="md:h-20 md:w-20 h-10 w-10 " />
              <div className="md:w-80 md:text-3xl text-md w-72">
                Facing limitations in deriving valuable insights from data
              </div>
              <div className="md:w-1/2 hidden md:block">
                <li>
                  RGS Data-Platform empowers businesses to unlock the full
                  potential of their data by providing comprehensive analytics
                  and visualization tools.
                </li>
                <br />
                <li>
                  Offers 42 dashboards covering key segments like Customer,
                  Order, Finance, Marketing, Transactions, Payments, enabling
                  users to derive meaningful insights effortlessly.
                </li>
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
