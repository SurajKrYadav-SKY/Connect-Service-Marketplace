import React from 'react';
import "./Footer.scss";


const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='top'>
          <div className='item'>
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Connect</span>
            <span>Buying on Connect</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From Connect</h2>
            <span>Connect Business</span>
            <span>Connect Pro</span>
            <span>Connect Logo Maker</span>
            <span>Connect Guides</span>
            <span>Get Inspired</span>
            <span>Connect Select</span>
            <span>ClearVoice</span>
            <span>Connect Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr/>
        <div className='bottom'>
          <div className='left'>
            <h2>Connect</h2>
            <span>© Connect International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/images/twitter.png" alt="" />
              <img src="/images/facebook.png" alt="" />
              <img src="/images/linkedin.png" alt="" />
              <img src="/images/pinterest.png" alt="" />
              <img src="/images/x.png" alt="" />
            </div>
            <div className="link">
              <img src="/images/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/images/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/images/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
