import Image from "next/image";

const FourthSection = () => {
  return (
    <div className="md:py-10 py-10 space-y-10 items-center justify-center">
      <div className="text-4xl text-center">
        Industry Challenges in Data Quality
      </div>

      <div className="md:flex md:space-x-10 items-center px-10 justify-center">
        <div className=" rounded-md flex">
          <Image
            src="/images/data/dataquality.png"
            width={530}
            height={500}
            alt="Data Platform Image"
            className="w-[500px] h-[500px]"
          />
        </div>

        <div className="flex items-center justify-center py-6 md:w-1/2">
          <div className="text-4xl flex md:space-y-10 space-y-6 flex-col">
            <div>Industry Challenges in Data Quality</div>

            <div className="text-2xl">
              Inconsistent, inaccurate, and unreliable data poses significant
              challenges for industries. Extracting meaningful insights becomes
              difficult, hindering effective decision-making and data
              utilization for critical processes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
