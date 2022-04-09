import { Grid } from "@mui/material";
import ServiceData from "../../../Cmmons/Data/ServicesData.json";
import SingleCard from "./SingleCard";

const ServiceCard = () => {
  return (
    <div className="service_section">
      <Grid container>
        {ServiceData.map((service) => (
          <SingleCard key={service.uid} service_data={service} />
        ))}
      </Grid>
    </div>
  );
};

export default ServiceCard;
