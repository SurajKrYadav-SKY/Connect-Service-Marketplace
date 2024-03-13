import React from "react";
import "./Description.scss";

const Description = () => {
  return (
    <div className="desc">
      <div className="container">
        <div className="item">
          <h1>The best part? Everything.</h1>
          <div className="title">
            <img src="images/check.png" alt="" />
            Stick to your budget
          </div>
          <p>
            Find the right service for every price point. No hourly rates, just
            project-based pricing.
          </p>

          <div className="title">
            <img src="images/check.png" alt="" />
            Stick to your budget
          </div>
          <p>
            Find the right service for every price point. No hourly rates, just
            project-based pricing.
          </p>

          <div className="title">
            <img src="images/check.png" alt="" />
            Stick to your budget
          </div>
          <p>
            Find the right service for every price point. No hourly rates, just
            project-based pricing.
          </p>

          <div className="title">
            <img src="images/check.png" alt="" />
            Stick to your budget
          </div>
          <p>
            Find the right service for every price point. No hourly rates, just
            project-based pricing.
          </p>
        </div>
        <div className="item">
          <video src="images/connect.mp4" controls></video>
        </div>
      </div>
    </div>
  );
};

export default Description;
