import React from "react";
import { portfolio_data } from "../../../Cmmons/data/portfolio_data";
import PortfolioCard from "./PortfolioCard";

const PortfolioCounter = () => {
  return (
    <>
      <div
        className="portfolio_section_wrapper"
        style={{ marginBottom: "20px" }}
      >
        <div className="portfolio_section">
          {portfolio_data.map((data) => (
            <PortfolioCard key={data.uid} portfolio_data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PortfolioCounter;
