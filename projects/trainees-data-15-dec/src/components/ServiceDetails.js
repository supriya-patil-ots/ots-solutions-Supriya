import React from "react";
import ServicesData from "./ServicesData";
import { useParams } from "react-router-dom";
import "./services.css";

const ServiceDetails = () => {
  const { id } = useParams();
  const { img, service, detailData } = ServicesData[id];

  return (
    <div className="service-details">
      <h2>{service}</h2>
      <div className="service-details-page">
        <p>{detailData}</p>
        <div className="img-block">
          <img src={img} />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
