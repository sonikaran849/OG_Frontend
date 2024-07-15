import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCardCarousel from "../../components/HomeSectionCardCarousel/HomeSectionCardCarousel";
import { mens_Tees } from "../../../Data/mens_Tees";
const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCardCarousel data={mens_Tees} SectionName={"Men's Oversized Tees"}/>
        <HomeSectionCardCarousel data={mens_Tees}/>
        <HomeSectionCardCarousel data={mens_Tees}/>
        <HomeSectionCardCarousel data={mens_Tees}/>
        <HomeSectionCardCarousel data={mens_Tees}/>
      </div>
    </div>
  );
};

export default HomePage;
