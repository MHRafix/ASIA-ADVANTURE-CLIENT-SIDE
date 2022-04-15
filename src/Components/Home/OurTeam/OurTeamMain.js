import React from "react";
import SectionTitle from "../../Cmmons/SectionTitle/SectionTitle";
import OurTeamSlider from "./OurTeamCard/OurTeamSlider";

const OurTeamMain = () => {
  return (
    <>
      <div className="our_team_member_section_wrapper">
        <SectionTitle section_title="Our Team" />
        <OurTeamSlider />
      </div>
    </>
  );
};

export default OurTeamMain;
