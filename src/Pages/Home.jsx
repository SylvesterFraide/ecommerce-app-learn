import React from "react";
import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";

const Home = () => {
  return (
    <div>
      <Hero
        ourBestSellers="OUR BEST SELLERS"
        latestArrivals="Latest Arrivals"
        shopNow="SHOP NOW"
      />
      <LatestCollection />
    </div>
  );
};

export default Home;
