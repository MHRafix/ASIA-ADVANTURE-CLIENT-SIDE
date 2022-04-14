import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

const title_style = {
  textTransform: "capitalize",
  fontFamily: "Poppins",
  letterSpacing: "1px",
  fontSize: 30,
  fontWeight: 700,
  textAlign: "left",
  color: "#00ff6a",
};

const SectionTitle = ({ section_title }) => {
  return (
    <>
      <Grid sx={{ margin: "50px 8px" }}>
        <Typography sx={title_style} variant="h1" component="h3">
          {section_title}
        </Typography>
        <span className="title_border"></span>
      </Grid>
    </>
  );
};

export default SectionTitle;
