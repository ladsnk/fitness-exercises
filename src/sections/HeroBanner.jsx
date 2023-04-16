import React from "react";
import "../styles/hero-banner.scss";

const HeroBanner = () => {
  return (
    <div className="hero">
      <h1 className="hero__heading">Fitness Club</h1>
      <p className="hero__phrase">
        Sweat, Smile <br /> and Repeat
      </p>
      <p className="hero__suggestion">
        Check out the most effective exercises personalized to you
      </p>
      <button className="hero__btn" href="#exercises">
        Explore exercises
      </button>
      <h3 className="hero__hint">Exercise</h3>
      <img src="./banner.png" alt="banner" className="hero__banner-img" />
    </div>
  );
};

export default HeroBanner;
