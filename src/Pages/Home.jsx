import React from "react";
import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";
import BestSaller from "../Components/BestSaller";
import OurPolicy from "../Components/OurPolicy";

const Home = () => {
  return (
    <div>
      <Hero
        ourBestSellers="OUR BEST SELLERS"
        latestArrivals="Latest Arrivals"
        shopNow="SHOP NOW"
      />
      <LatestCollection />
      <BestSaller />
      <OurPolicy />
    </div>
  );
};

export default Home;
