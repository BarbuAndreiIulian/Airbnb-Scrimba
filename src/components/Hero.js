import React from "react";
import "./Hero.css";
import experiences from "../components/assets/experiences.svg";

const Hero = () => {
  return (
    <div className="hero-content">
      <div className="exp-flex">
        <img class="experiences" src={experiences} />
      </div>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
};

export default Hero;
