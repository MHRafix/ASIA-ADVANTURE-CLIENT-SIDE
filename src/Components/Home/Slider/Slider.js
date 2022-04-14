import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider_Data from "../../Cmmons/data/slider_data.json";
import { sliderSettings } from "../../Cmmons/utilities/slider_settings/settings";
import { SliderContent } from "./SliderContent";

export const HomeSlider = () => {
  const { settings } = sliderSettings(true, 1, 1, true, 2000);

  return (
    <>
      <div className="slider_wrapper">
        <Slider {...settings}>
          {Slider_Data.map((slider) => (
            <SliderContent key={slider.uid} slider={slider} />
          ))}
        </Slider>
      </div>
    </>
  );
};
