import React from "react";
import { Card } from "semantic-ui-react";
import ServicesData from "./ServicesData";
import "./main.css";

const Services = () => {
  console.log("serv", ServicesData);
  return (
    <>
      <h2>Services</h2>
      <div className="services-gallery">
        {ServicesData.map((item) => {
          return (
            <Card
              image={item.img}
              header={item.service}
              description={item.describe}
            />
          );
        })}
      </div>
    </>
  );
};
export default Services;
