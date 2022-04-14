import { Grid } from "@mui/material";
import { services_data } from "../../../Cmmons/data/services_data.js";
import SingleCard from "./SingleCard";

const ServiceCard = () => {
  return (
    <div className="service_section">
      <Grid container>
        {services_data.map((service) => (
          <SingleCard key={service.uid} service_data={service} />
        ))}
      </Grid>
    </div>
  );
};

export default ServiceCard;
