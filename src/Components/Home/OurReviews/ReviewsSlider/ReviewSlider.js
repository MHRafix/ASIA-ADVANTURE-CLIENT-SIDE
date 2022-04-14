import React from "react";
import Slider from "react-slick";
import { customer_revies } from "../../../Cmmons/data/reviews_data";
import ReviewsCard from "../ReviewsCard/ReviewCard";

const ReviewSlider = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {customer_revies.map((review) => (
          <ReviewsCard key={review.uid} review_data={review} />
        ))}
      </Slider>
    </>
  );
};

export default ReviewSlider;
