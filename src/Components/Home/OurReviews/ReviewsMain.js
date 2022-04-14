import React from "react";
import BackgroundBanner from "../../../Images/reviews_banner/reviews_banner.jpg";
import SectionTitle from "../../Cmmons/SectionTitle/SectionTitle";
import PortfolioCounter from "./PortfolioCounter/PortfolioCounter";
import ReviewSlider from "./ReviewsSlider/ReviewSlider";

const ReviewsMain = () => {
  return (
    <>
      <div
        className="section_wrapper"
        style={{
          backgroundImage: `url(${BackgroundBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          padding: "2% 0%",
          margin: "80px 0px",
        }}
      >
        <SectionTitle section_title="our reviews" />
        <ReviewSlider />
        <PortfolioCounter />
      </div>
    </>
  );
};

export default ReviewsMain;
