import React from "react";
import Slider from "react-slick";
import { team_members_data } from "../../../Cmmons/data/our_team_data";
import MemberCard from "./MemberCard";
const OurTeamSlider = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 3000,
    // autoplaySpeed: 3000,
    // swipeToSlide: true,
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
        {team_members_data.map((member) => (
          <MemberCard key={member.uid} member_data={member} />
        ))}
      </Slider>
    </>
  );
};

export default OurTeamSlider;
