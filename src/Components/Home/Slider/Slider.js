import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider_Data from "../../Cmmons/Data/SliderData.json";
import { SliderContent } from "./SliderContent";

export const HomeSlider = () => {
  const settings = {
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: false,
    prevArrow: false,
  };

  return (
    <div className="slider_wrapper">
      <Slider {...settings}>
        {Slider_Data.map((slider) => (
          <SliderContent key={slider.uid} slider={slider} />
        ))}
      </Slider>
    </div>
  );
};
