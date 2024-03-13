import React from "react";
import "./VidCard.scss";

const VidCard = ({ item }) => {
  return (
    <div className="vidCard">
      <div className="container">
        <div className="first">
          <video src={item.vid} controls></video>
        </div>
        <div className="second">
          <div className="texts">
            <h2>{item.name}</h2>
            <div className="company">
              <img src="/images/girl.png" alt="" />
              <span>{item.company}</span>
            </div>
          </div>
          <p>
            <i>{item.quote}</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VidCard;
