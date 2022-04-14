import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import React from "react";
import Rating from "react-rating";
const ReviewCard = ({ review_data }) => {
  const {
    customer_name,
    customer_avatar,
    taken_service,
    customer_rating,
    customer_reviews,
  } = review_data;

  return (
    <>
      <div className="review_card">
        <div className="customer_avatar">
          <img src={customer_avatar} alt="customer_avatar" />
          <div className="social_icons_wrapper">
            <span className="social_icon">
              <FacebookOutlinedIcon />
            </span>
            <span className="social_icon">
              <PlayCircleFilledWhiteOutlinedIcon />
            </span>
          </div>
        </div>
        <div className="reviews_data">
          <h1 className="serice_title">{taken_service}</h1>
          <span className="ratings">
            <Rating
              initialRating={customer_rating}
              emptySymbol={<StarOutlineIcon />}
              fullSymbol={<StarIcon />}
              readonly
            />
          </span>
          <p className="reviews_desc">{customer_reviews.slice(0, 80)}.....</p>
          <h3 className="customer_name">{customer_name}</h3>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
