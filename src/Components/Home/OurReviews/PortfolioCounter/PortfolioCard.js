import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const PortfolioCard = ({ portfolio_data }) => {
  const { portfolio_name, portfolio_icon, portfolio_counter } = portfolio_data;
  return (
    <>
      <div className="portfolio_card">
        <div className="portfolio_icon">{portfolio_icon}</div>
        <div className="portfolio_counter">
          <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
            {({ isVisible }) => (
              <div style={{ height: 60 }}>
                {isVisible ? (
                  <CountUp start={0} end={portfolio_counter} duration={2.5} />
                ) : null}
              </div>
            )}
          </VisibilitySensor>
        </div>
        <div className="portfolio_name">{portfolio_name}</div>
      </div>
    </>
  );
};

export default PortfolioCard;
