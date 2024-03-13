import React from "react";
import "./LogoMaker.scss";

const LogoMaker = () => {
  return (
    <div className="logoMaker">
    <div className='container'>
      <div className='item'>
        <h2><strong>Connect</strong> logo maker</h2>
        <div className='title'>
          <h1>Make an incredible logo</h1>
        </div>
        <p><i>in minutes</i></p>
        Pre-designed by top talent. Just add your touch.
        <button className="button">Try Connect Logo Maker</button>
      </div>
      <div className='item'>
        <img src="images/lm.webp" controls></img>
      </div>
    </div>
  </div>
  );
};

export default LogoMaker;
