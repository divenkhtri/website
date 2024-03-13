import Image from "next/image";

const SecondSection = () => {
  return (
    <div className="py-10 space-y-10 items-center justify-center flex flex-col">
      <div className="text-5xl ">Key Features of DataMind</div>
      <div className="text-2xl text-center">
        Experience the power of DataMind with these standout features.
      </div>
      <div className="px-5 md:flex space-y-10 md:space-y-0 md:space-x-10 text-xl">
        <div className="w-70  border p-8 rounded-lg">
          <div className="flex items-center space-x-2">
            <div>
              <Image
                src="/images/icons/virtual-lab.gif"
                width={250}
                height={250}
                alt="Data Injection Icon"
                className="h-20 w-20"
              />
            </div>

            <div className="text-2xl font-medium">Data Injection</div>
          </div>
          <div className="pt-4 pr-1">
            Seamlessly inject data from any source into DataMind for unified processing.
          </div>
        </div>
        <div className="w-70 border p-8 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="w-full">
              <Image
                src="/images/icons/under-construction.gif"
                width={650}
                height={250}
                alt="Data Standardization Icon"
                className="h-20 w-20"
              />
            </div>

            <div className="text-2xl font-medium">Data Standardization</div>
          </div>
          <div className="pt-4 pr-1">Standardize data according to industrial OTA schema for consistency.</div>
        </div>
        <div className="w-70 border p-8 rounded-lg">
          <div className="flex items-center space-x-2">
            <div>
              <Image
                src="/images/icons/check.gif"
                width={600}
                height={250}
                alt="Data Cleaning Icon"
                className="h-20 w-20"
              />
            </div>

            <div className="text-2xl font-medium">Data Cleaning & Validation</div>
          </div>
          <div className="pt-4 pr-1">
            Implement 120+ data cleaning and validation rules to ensure high-quality data.
          </div>
        </div>
        <div className="w-70 border p-8 rounded-lg">
          <div className="flex items-center space-x-2">
            <div>
              <Image
                src="/images/icons/bar-chart.gif"
                width={600}
                height={250}
                alt="Data Analytics Icon"
                className="h-20 w-20"
              />
            </div>

            <div className="text-2xl font-medium">Data Analytics & Science</div>
          </div>
          <div className="pt-4 pr-1">Utilize processed data in BigQuery for advanced analytics and data science.</div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
