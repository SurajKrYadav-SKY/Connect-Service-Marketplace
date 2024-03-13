import React from 'react';
import "./Gigs.scss";

const Gigs = () => {
  return (
    <div className='gigs'>
      <div className="container">
        <span className='breadcrumbs'>CONNECT - GRAPHICS AND DESIGN</span>
        <h1>AI Artist</h1>
        <p>
          Explore the boundaries of art and technology with Connect's AI Artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder='min price'/>
            <input type="text" placeholder='max price'/>
            <button>Apply</button>
          </div>
          <div className="right">
            <span className='sortBy'>SortBy</span>
            <span className='sortType'>Best Selling</span>
            <img src="images/down.png" alt="" />
            <div className="rightMenu">
              <span>Newest</span>
              <span>Best Selling</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gigs
