import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/Men/men_kurta";
import { lehngacholiPage2 } from "../../../Data/Saree/lenghaCholiPage2";
import { mensShoesPage1 } from "../../../Data/shoes";

function HomePage() {
  return (
    <div>
      <div>
        <MainCarousel />
      </div>
      <div className="space-y-10 py-10 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={mens_kurta} sectionName="Men's Kurta" />
        <HomeSectionCarousel data={mensShoesPage1} sectionName="Men's Shoes" />
        <HomeSectionCarousel
          data={require("../../../Data/Men/men_shirt.json")}
          sectionName="Men's Shirt"
        />
        <HomeSectionCarousel
          data={lehngacholiPage2}
          sectionName="Women's Saree"
        />
        <HomeSectionCarousel
          data={require("../../../Data/Women/women_dress.json")}
          sectionName="Women's Dress"
        />
      </div>
    </div>
  );
}

export default HomePage;
