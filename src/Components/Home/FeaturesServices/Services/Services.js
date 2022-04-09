import React from "react";
import SectionTitle from "../../../Cmmons/SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="upcoming_tour_section">
      <SectionTitle section_title={"Our Services"} />
      <ServiceCard />
    </div>
  );
};

export default Services;
