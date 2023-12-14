import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCard from "../../components/HomeSectionCard/HomeSectionCard";

function HomePage() {
  return (
    <div>
      <div>
        <MainCarousel />
      </div>
      <div>
        <HomeSectionCard />
      </div>
    </div>
  );
}

export default HomePage;
