import React from "react";
import { Card } from "semantic-ui-react";
import ServicesData from "./ServicesData";
import { Link } from "react-router-dom";
import "./main.css";

const Services = () => {
  return (
    <>
      <div className="service-page">
        <h2>Services</h2>
      </div>
      <div className="services-gallery">
        {ServicesData.map((service, index) => {
          return (
            <Link to={`/services/${index}`}>
              <Card
                key={index}
                image={service.img}
                header={service.service}
                description={service.describe}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Services;
