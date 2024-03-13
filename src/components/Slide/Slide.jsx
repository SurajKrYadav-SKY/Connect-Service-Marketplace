import React from "react";
import "./Slide.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Slide = ({ children, slidesToShow, slidesToScroll, heading }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
  };

  return (
    <div className="slide">
      <div className="container">
        <h1>{heading}</h1>
        <Slider className="slider" {...settings}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
