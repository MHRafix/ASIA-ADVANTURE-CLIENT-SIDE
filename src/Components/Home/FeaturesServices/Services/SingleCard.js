import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

// style object here
const package_name_style = {
  margin: "15px 0px",
  fontFamily: "Poppins",
  fontSize: 20,
  boxSizing: "border-box",
  fontWeight: 700,
  textTransform: "capitalize",
  letterSpacing: "1px",
  lineHeight: "1.272727272727273em",
};

const card_desc_style = {
  fontFamily: "Poppins",
  fontWeight: 400,
  fontSize: 15,
  color: "#505050",
  width: "70%",
  margin: "10px auto",
  border: 0,
  outline: 0,
  padding: 0,
  verticalAlign: "baseline",
};

const service_link = {
  color: "#000",
  fontSize: 15,
  padding: "1px 0px",
  textDecoration: "none",
  borderBottom: "1px solid #00ff6a",
  cursor: "pointer",
};

const SingleCard = ({ service_data }) => {
  const { uid, service_icon, service_name, service_desc } = service_data;
  return (
    <Grid item md={3} xs={12}>
      <div className="service_card">
        <div className="service_icon_wrapper">
          <span className="service_icon">{service_icon}</span>
        </div>
        <div className="service_name">
          <Typography variant="h2" component="h4" sx={package_name_style}>
            {service_name}
          </Typography>
        </div>
        <div className="service_desc">
          <Typography variant="p" component="p" sx={card_desc_style}>
            {service_desc}
          </Typography>
          <Link style={service_link} to={`/service/single_services/${uid}`}>
            Read More
          </Link>
        </div>
      </div>
    </Grid>
  );
};

export default SingleCard;
