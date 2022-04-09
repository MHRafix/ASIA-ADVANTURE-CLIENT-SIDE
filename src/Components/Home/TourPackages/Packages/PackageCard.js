import React from "react";
import Slider from "react-slick";
import PackagesData from "../../../Cmmons/Data/TravelPackagesData.json";
import SingleCard from "./SingleCard";

const PackageCard = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {PackagesData.map((tour) => (
          <SingleCard key={tour.uid} tour_date={tour} />
        ))}
      </Slider>
    </div>
  );
};

export default PackageCard;
