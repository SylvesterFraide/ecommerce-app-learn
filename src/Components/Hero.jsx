import React from "react";
import hero1 from '/hero1.jpeg';

const Hero = ({ourBestSellers, latestArrivals, shopNow}) => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* hero left side */}

      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p>{ourBestSellers}</p>
          </div>
          <h1 className=" prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            {latestArrivals}
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">{shopNow}</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Hero right side */}
       <img className="w-full sm:w-1/2" src={hero1} alt="heroImage" />
    </div>
  );
};

export default Hero;
