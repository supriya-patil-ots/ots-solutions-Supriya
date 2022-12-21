import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

// const items = [
//   { key: "home", name: "Home" },
//   { key: "services", name: "Services" },
//   { key: "contact-us", name: "Contact Us" },
//   { key: "trainees", name: "Trainees" },
// ];

const MenuBar = () => {
  return (
    <Menu>
      <Menu.Item as={Link} to="/home">
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/trainees">
        trainees
      </Menu.Item>
      <Menu.Item as={Link} to="/Services">
        Services
      </Menu.Item>
      <Menu.Item as={Link} to="/ServiceDetails">
        ServiceDetails
      </Menu.Item>
      <Menu.Item as={Link} to="/contactus">
        contact us
      </Menu.Item>
    </Menu>
  );
};

export default MenuBar;
