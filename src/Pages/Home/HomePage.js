import React from "react";
import { Header } from "../../Components/Cmmons/Header/Header";
import Services from "../../Components/Home/FeaturesServices/Services/Services";
import { HomeSlider } from "../../Components/Home/Slider/Slider";
import Packages from "../../Components/Home/TourPackages/Packages/Packages";

export const HomePage = () => {
  return (
    <>
      <Header />
      <HomeSlider />
      <Packages />
      <Services />
    </>
  );
};
