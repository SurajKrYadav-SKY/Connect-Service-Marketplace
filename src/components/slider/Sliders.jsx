import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Sliders.scss";

const Sliders = ({children,slidesToScroll,slidesToShow}) => {
  const [settings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
  });

  return (
    <div className="sliders">
      <div className="container">
      <Slider className="slider" {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
