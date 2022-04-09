import { Grid, Typography } from "@mui/material";
import React from "react";

const tagline_style = {
  color: "#fff",
  fontFamily: "Dancing Script",
  fontSize: 35,
  fontWeight: 700,
  textTransform: "capitalize",
};

const title_style = {
  color: "#fff",
  fontFamily: "Poppins",
  fontSize: 100,
  fontWeight: 800,
  textTransform: "capitalize",
  lineHeight: 1,
};

const description_style = {
  color: "#fff",
  fontFamily: "Poppins",
  fontSize: 18,
  fontWeight: 500,
  width: "50%",
  margin: "10px auto",
};

export const SliderContent = ({ slider }) => {
  const {
    slider_tagline,
    slider_title,
    slider_description,
    slider_background,
  } = slider;

  return (
    <div
      className="single_slider"
      style={{
        backgroundImage: `url(${slider_background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "90vh",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid>
        <Typography sx={tagline_style}>{slider_tagline}</Typography>
        <Typography sx={title_style}>{slider_title}</Typography>
        <Typography sx={description_style}>{slider_description}</Typography>
      </Grid>
    </div>
  );
};
