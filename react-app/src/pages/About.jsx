import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/About.css";
import logo from "../Images/jen-portrait.jpg";
import Card from "../components/Card";
import content from "../content/forAbout";

export default function About() {
  return (
    <div className="about-container mt-20">
      <div className="color-temp1"></div>

      <div className="flex-container">
        <img
          className="jen-photo rounded-full border-5 border-indigo-50"
          src={logo}
          alt="photo of Jen"
        />

        {/* <div className="biography"></div> */}

        <Card content={content} className="card" />
      </div>
    </div>
  );
}
