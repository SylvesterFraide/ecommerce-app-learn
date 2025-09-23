import React from "react";
import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";
import BestSaller from "../Components/BestSaller";

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
    </div>
  );
};

export default Home;
