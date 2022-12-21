import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MenuBar from "./components/MenuBar";
import TraineesComponent from "./components/TraineesComponent";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import ServiceDetails from "./components/ServiceDetails";
function App() {
  return (
    <div className="App">
      <h1>OTS Solutions</h1>
      <MenuBar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/trainees" element={<TraineesComponent />} />
      </Routes>
    </div>
  );
}

export default App;
