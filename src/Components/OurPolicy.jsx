import React from "react";
import exchange from "../assets/icons/exchange.png";
import quality from "../assets/icons/quality.png";
import support from "../assets/icons/support.jpg";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xl sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={exchange} alt="" className="w-12 m-auto mb-5 " />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">
          We offer a hassle-free exchange policy for all our products.
        </p>
      </div>
      <div>
        <img src={quality} alt="" className="w-12 m-auto mb-5 " />
        <p className="font-semibold">Quality Assurance</p>
        <p className="text-gray-400">
          We ensure the highest quality standards for all our products.
        </p>
      </div>
      <div>
        <img src={support} alt="" className="w-12 m-auto mb-5 " />
        <p className="font-semibold">Customer Support</p>
        <p className="text-gray-400">
          We offer 24/7 customer support for all our products.
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;