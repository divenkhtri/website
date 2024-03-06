import Image from "next/image";

const FourthSection = () => {
  return (
    <div className="md:py-20 py-10 space-y-10 items-center justify-center">
      <div className="text-4xl text-center">
        Unlock Seamless Collaboration with DataMind
      </div>

      <div className="md:flex md:space-x-10 items-center px-10 justify-center">
        <div className="bg-gradient-to-r from-gray-400 to-gray-100 rounded-md flex p-10">
          <Image
            src="/images/tab-1.webp"
            width={530}
            height={500}
            alt="Data Platform Image"
            className="rounded-md w-80 h-60 md:w-96 md:h-80"
          />
        </div>

        <div className="flex items-center justify-center py-6 md:w-1/2">
          <div className="text-4xl flex md:space-y-10 space-y-6 flex-col">
            <div>Revolutionize Team Collaboration</div>

            <div className="text-2xl">
              Elevate your team's efficiency by minimizing redundancy and enhancing cross-team visibility. Seamlessly manage tasks across projects with automatic updates.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
