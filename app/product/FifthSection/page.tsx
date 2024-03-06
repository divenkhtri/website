import Image from "next/image";
import Link from "next/link";

const FifthSection = () => {
  return (
    <div className="py-20 px-10 items-center justify-center md:flex">
      <div className="items-center md:w-1/2 pb-20 md:pb-0 space-y-6 justify-center">
        <div className="text-4xl flex">Empower Your Data Insights Journey</div>
        <div className="text-2xl md:w-5/6">
          Maximize your data's potential with our platform. From seamless data
          injection and standardization to advanced analytics and dashboard
          visualization, we ensure efficient processing and utilization of your
          valuable data.
        </div>
        <div className="p-6 border w-40 rounded-xl text-xl">Get Started</div>
      </div>
      <Link href="/pricing">
        <div className="bg-gradient-to-r from-gray-400 to-gray-100 rounded-md flex p-6">
          <Image
            src="/images/tab-3.webp"
            width={530}
            height={500}
            alt="Data Platform Image"
            className="rounded-md w-80 h-60 md:w-96 md:h-80"
          />
        </div>
      </Link>
    </div>
  );
};

export default FifthSection;
