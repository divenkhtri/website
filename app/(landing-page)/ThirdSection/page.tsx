    "use client";

    import { CheckCircle2 } from "lucide-react";
    import { motion } from "framer-motion";
    import { useRef } from "react";
    import { useInView } from "framer-motion";
    import Link from "next/link";

// ... (import statements remain unchanged)

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
          <div className="text-white text-4xl px-10 md:px-0 md:text-6xl md:pb-10 flex items-start justify-start ">
            Challenges Addressed by RGS Data-Platform
          </div>
          <div className="md:w-3/4 px-10">
            <div className="flex space-x-10 md:space-x-20 text-white items-center text-2xl justify-center border-b border-t py-10">
              <CheckCircle2 className="md:h-20 md:w-20 h-10 w-10 " />
              <div className="md:w-80 md:text-3xl text-md w-72">
                Inefficient Management of Data Volumes
              </div>
              <div className="md:w-1/2 hidden md:block">
                <li>
                  RGS Data-Platform addresses the challenge of managing vast data volumes efficiently.
                </li>
                <br />
                <li>
                  Utilizes advanced data standardization and cleaning processes to handle large-scale data seamlessly.
                </li>
              </div>
            </div>
            <div className="flex space-x-10 md:space-x-20 text-white items-center justify-center  text-2xl border-b border-t py-10">
              <CheckCircle2 className="md:h-20 md:w-20 w-10 h-10 " />
              <div className="md:w-80 md:text-3xl text-md w-72">
                Outdated Data Processing Approaches
              </div>
              <div className="md:w-1/2 hidden md:block">
                <li>
                  RGS Data-Platform overcomes the limitations of traditional approaches with modern, scalable methods.
                </li>
                <br />
                <li>
                  Integrates cutting-edge technologies to ensure dynamic, responsive, and tailored data processing.
                </li>
              </div>
            </div>
            <div className="flex space-x-10 md:space-x-20 text-white items-center justify-center text-2xl border-b border-t py-10">
              <CheckCircle2 className="md:h-20 md:w-20 h-10 w-10 " />
              <div className="md:w-80 md:text-3xl text-md w-72">
                Limited Derivation of Valuable Insights from Data
              </div>
              <div className="md:w-1/2 hidden md:block">
                <li>
                  RGS Platform empowers businesses to unlock the full potential of your data and To get started to drive insights and
                </li>
                <br />
                <li>
                  Offers comprehensive analytics and visualization tools with 50 dashboards covering key segments.
                </li>
              </div>
            </div>
            <Link href="/contact">
              <div className="bg-gray-200 p-6 w-64 rounded-lg mt-10 items-center justify-center flex">
                Drive your data insights now! 
              </div>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThirdSection;
