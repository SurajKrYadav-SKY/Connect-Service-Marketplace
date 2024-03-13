import React from 'react';
import "./Explore.scss";

const Explore = () => {
  return (
    <div className="explore">
        <div className="container">
          <h1>You need it, we've got it</h1>
          <div className="items">
            <div className="item">
              <img src="images/design.png" alt="" />
              <div className="line"></div>
              <span>Graphics & Design</span>
            </div>
            <div className="item">
              <img src="images/marketing.png" alt="" />
              <div className="line"></div>

              <span>Digital Marketing</span>
            </div>
            <div className="item">
              <img src="images/write.png" alt="" />
              <div className="line"></div>
              <span>Writing & Translation</span>
            </div>
            <div className="item">
              <img src="images/video.png" alt="" />
              <div className="line"></div>
              <span>Video & Animation</span>
            </div>
            <div className="item">
              <img src="images/audio.png" alt="" />
              <div className="line"></div>
              <span>Music & Audio</span>
            </div>
            <div className="item">
              <img src="images/program.png" alt="" />
              <div className="line"></div>
              <span>Programming & Tech</span>
            </div>
            <div className="item">
              <img src="images/business.png" alt="" />
              <div className="line"></div>
              <span>Business</span>
            </div>
            <div className="item">
              <img src="images/lifestyle.png" alt="" />
              <div className="line"></div>
              <span>Lifestyle</span>
            </div>
            <div className="item">
              <img src="images/data.png" alt="" />
              <div className="line"></div>
              <span>Data</span>
            </div>
            <div className="item">
              <img src="images/photo.png" alt="" />
              <div className="line"></div>
              <span>Photography</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Explore
