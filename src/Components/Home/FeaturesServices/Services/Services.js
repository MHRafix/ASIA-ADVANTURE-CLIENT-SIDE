import React from "react";
import SectionTitle from "../../../Cmmons/SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <>
      <div className="section_wrapper">
        <SectionTitle section_title="Our Services" />
        <ServiceCard />
      </div>
    </>
  );
};

export default Services;
