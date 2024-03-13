import Image from "next/image";

const SeventhSection = () => {
  return (
    <div className="px-10 py-20 space-y-20 items-center justify-center flex flex-col bg-[#E5E4E2]">
      <div className="text-4xl md:w-2/5 text-center">Empowering Your Data Journey with Advanced Features</div>

      <div className="mx-[10rem] space-y-10 md:space-x-40 md:flex md:space-y-0">
        <div className="flex-col w-[15rem] space-y-4 flex">
          <Image 
            src="/images/icons/gears.png"
            width={300}
            height={300}
            alt="Gears Icon"
            className="h-20 w-20"
          />
          <div className="text-2xl font-semibold">Data Integration and Automation</div>
          <div className="space-y-4">
            <div className="text-xl"> • Seamlessly inject data from diverse sources into the platform.</div>
            <div className="text-xl"> • Automate processes for efficient data handling and integration.</div>
            <div className="text-xl"> • Manage resourcing for teams with messaging, comments, and unique views.</div>
          </div>
        </div>

        <div className="flex-col w-[15rem] space-y-4 flex">
          <Image 
            src="/images/icons/puzzle.png"
            width={300}
            height={300}
            alt="Puzzle Icon"
            className="h-20 w-20"
          />
          <div className="text-2xl font-semibold">Data Cleaning and Validation</div>
          <div className=" space-y-4">
            <div className="text-xl"> • Implement 120+ data cleaning and validation rules for high-quality data.</div>
            <div className="text-xl"> • Ensure accuracy and reliability in your data processing pipeline.</div>
            <div className="text-xl"> • Automate work in one place with 200+ integrations.</div>
          </div>
        </div>

        <div className="flex-col w-[15rem] space-y-4 flex">
          <Image 
            src="/images/icons/refresh-2.png"
            width={500}
            height={500}
            alt="Refresh Icon"
            className="h-20 w-20"
          />
          <div className="text-2xl font-semibold">Real-time Analytics and Insights</div>
          <div className=" space-y-4">
            <div className="text-xl"> • Monitor progress across teams with real-time insights.</div>
            <div className="text-xl"> • Build personalized visualizations with Custom Fields and Charts.</div>
            <div className="text-xl"> • Save time on creating reports with a robust Charts template library.</div>
          </div>
        </div>
      </div>

      <div className="space-y-10 md:space-x-40 md:flex md:space-y-0">
        <div className="flex-col w-[15rem] space-y-4 flex">
          <Image 
            src="/images/icons/lock.png"
            width={300}
            height={300}
            alt="Lock Icon"
            className="h-20 w-20"
          />
          <div className="text-2xl font-semibold">Data Security and Compliance</div>
          <div className=" space-y-4">
            <div className="text-xl"> • Ensure robust data security through AICPA-SOC, ISO, CCPA compliance.</div>
            <div className="text-xl"> • Address privacy concerns and adhere to regulations like Hipaa, GDPR.</div>
            <div className="text-xl"> • Manage permissions and security requirements from a centralized admin console.</div>
          </div>
        </div>

        <div className="flex-col w-[15rem] space-y-4 flex">
          <Image 
            src="/images/icons/contacts.png"
            width={300}
            height={300}
            alt="Contacts Icon"
            className="h-20 w-20"
          />
          <div className="text-2xl font-semibold">Role-based Access Control</div>
          <div className=" space-y-4">
            <div className="text-xl"> • Implement role-based access control for secure data management.</div>
            <div className="text-xl"> • Control permissions and privacy settings to ensure data integrity.</div>
          </div>
        </div>

        <div className="flex-col w-[15rem] space-y-4 flex">
          <Image 
            src="/images/icons/menu.png"
            width={500}
            height={500}
            alt="Menu Icon"
            className="h-20 w-20"
          />
          <div className="text-2xl font-semibold">Dashboard and Alert Management</div>
          <div className=" space-y-4">
            <div className="text-xl"> • Utilize 42 dashboards covering segments like Customer, Order, Finance, etc.</div>
            <div className="text-xl"> • Implement 4 charts and 1 table on average for comprehensive data visualization.</div>
            <div className="text-xl"> • Manage thresholds, alerts, and notifications for efficient inventory control.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
