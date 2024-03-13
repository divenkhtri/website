import { ArrowRight } from "lucide-react";
import Image from "next/image";

const SeventhSection = () => {
  return (
    <div className="flex flex-col md:py-20 md:p-40 p-10 bg-[#E5E4E2]">
      <div className="space-y-6 flex flex-col md:px-20 pb-10">
        <div className="text-xl">Unlock the Potential</div>
        <div className="text-4xl">Drive Business Innovation</div>
        <div className="text-xl">
          Explore use cases tailored for your industry and unleash the power of data-driven decision-making.
        </div>
      </div>
      <div className="md:flex md:px-5 md:space-x-10 space-y-10 md:space-y-0">
        <div className="rounded-sm bg-white p-8">
          <Image
            src="/images/fnb2.jpg"
            alt="F&B Analytics"
            width={500}
            height={500}
            className="w-96 h-[14rem]"
          />

          <div className="text-3xl pt-8">F&B Analytics</div>

          <div className="text-xl pt-4">
            Optimize inventory management, pricing strategies, and customer segmentation based on real-time data analysis.
          </div>

        </div>

        <div className="rounded-sm bg-white p-8">
          <Image
            src="/images/iot1.jpg"
            alt="IoT Data Processing"
            width={500}
            height={400}
            className="w-96 h-[14rem]"
          />

          <div className="text-3xl pt-8">IoT Data Processing</div>

          <div className="text-xl pt-4">
            Handle and analyze large-scale IoT data streams for predictive maintenance, asset tracking, and operational efficiency.
          </div>
        </div>

        <div className="rounded-sm bg-white p-8">
          <Image
            src="/images/maekrtopt.jpg"
            alt="Marketing Optimization"
            width={500}
            height={500}
            className="w-96 h-[14rem]"
          />

          <div className="text-3xl pt-8">Marketing Optimization</div>

          <div className="text-xl pt-4">
            Utilize customer behavior data to create targeted marketing campaigns and improve customer engagement.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
