import StarIcon from "@mui/icons-material/Star";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CountdownTimer from "../../../Cmmons/utilities/CountdownTimer/CountdownTimer";

// style object here
const package_name_style = {
  margin: "15px 0px",
  fontFamily: "Poppins",
  fontSize: 22,
  boxSizing: "border-box",
  fontWeight: 600,
  textTransform: "capitalize",
  textAlign: "left",
  letterSpacing: "-.05em",
  lineHeight: "1.272727272727273em",
};

const card_desc_style = {
  fontFamily: "Poppins",
  fontWeight: 400,
  fontSize: 15,
  textAlign: "left",
};

const package_price_style = {
  fontFamily: "Poppins",
  fontWeight: 600,
  lineHeight: "1.428571428571429em",
  fontSize: 14,
  textAlign: "left",
  margin: "15px 0px",
};

const package_review_style = {
  fontFamily: "Poppins",
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  lineHeight: "1.428571428571429em",
  fontSize: 14,
  textAlign: "left",
  margin: "15px 30px 15px 30px",
};

const SingleCard = ({ tour_date }) => {
  const { package_card, dead_line, package_name } = tour_date;

  return (
    <Link to="/singlePackage" style={{ color: "#000", textDecoration: "none" }}>
      <div className="pakcage_card">
        <div className="card_theme">
          <Grid>
            <img
              className="card_image"
              src={package_card}
              alt="place_thumbnail"
            />
          </Grid>
          <Grid>
            <CountdownTimer countdownTimestampMs={dead_line} />
          </Grid>
        </div>
        <div className="card_details">
          <Typography sx={package_name_style}>{package_name}</Typography>
          <Typography variant="p" component="p" sx={card_desc_style}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            enim!
          </Typography>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="p" component="p" sx={package_price_style}>
              $ 549
            </Typography>
            <Typography sx={package_review_style}>
              <StarIcon
                sx={{
                  color: "#00ff66",
                  borderRadius: "2px",
                  margin: "0px 5px",
                }}
              />{" "}
              8.7 Superb
            </Typography>
          </Grid>
        </div>
      </div>
    </Link>
  );
};

export default SingleCard;
