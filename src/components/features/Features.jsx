import React from "react";
import "./Features.scss";

const Features = () => {
  return (
    <div className="feature">
      <div className="container">
        <div className="item">
          <div className="logo">
            <span className="text">connect</span>
            <span className="dot">.</span>
            <span className="text2">Business Solutions</span>
          </div>
          <h1>Advanced solutions and professional talent for businesses</h1>
          <div className="title">
            <img src="images/check2.png" alt="" />
            Connect Pro
            <br />
            Access top freelancers and professional business tools for any
            project
          </div>
          <div className="title">
            <img src="images/check2.png" alt="" />
            Connect Certified
            <br />
            Build your own branded marketplace of certified experts
          </div>
          <div className="title">
            <img src="images/check2.png" alt="" />
            Connect Enterprise
            <br />
            Manage your freelance workforce and onboard additional talent with
            an end-to-end SaaS solution
          </div>
          <button className="button">Learn more</button>
        </div>
        <div className="item">
          <img src="images/EN.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
