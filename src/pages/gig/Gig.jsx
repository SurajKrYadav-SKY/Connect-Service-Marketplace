// import React from "react";
// import "./Gig.scss";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// const Gig = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="gig">
//       <div className="container">
//         <div className="left">
//           <span className="breadCrumbs">CONNECT - GRAPHICS & DESIGN</span>
//           <h1>I will create AI generated art for you</h1>

//           <div className="user">
//             <img
//               className="pp"
//               src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
//               alt=""
//             />
//             <span>Anna</span>
//             <div className="stars">
//               <img src="images/star.png" alt="" />
//               <img src="images/star.png" alt="" />
//               <img src="images/star.png" alt="" />
//               <img src="images/star.png" alt="" />
//               <img src="images/star.png" alt="" />
//               <span>5</span>
//             </div>
//           </div>
//           <Slider {...settings}>
//             <div>
//               <img
//                 src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//             </div>

//             <div>
//               <img
//                 src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//             </div>
//             <div>
//               <img
//                 src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//             </div>
//           </Slider>
//           <h2>About This Gig</h2>
//           <p>
//             I make use of an AI program to create images based on text prompts.
//             This means I can help you to create a vision you have through a
//             textual description of your scene without requiring any reference
//             images. Some things I've found it often excels at are: Character
//             portraits (E.g. a picture to go with your DnD character) Landscapes
//             (E.g. wallpapers, illustrations to compliment a story) Logos (E.g.
//             Esports team, business, profile picture) You can be as vague or as
//             descriptive as you want. Being more vague will allow the AI to be
//             more creative which can sometimes result in some amazing images. You
//             can also be incredibly precise if you have a clear image of what you
//             want in mind. All of the images I create are original and will be
//             found nowhere else. If you have any questions you're more than
//             welcome to send me a message.
//           </p>
//           <div className="seller">
//             <h2>About the seller</h2>
//             <div className="user">
//               <img
//                 src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                 alt=""
//               />
//               <div className="info">
//                 <span>Anna</span>
//                 <div className="stars">
//                   <img src="images/star.png" alt="" />
//                   <img src="images/star.png" alt="" />
//                   <img src="images/star.png" alt="" />
//                   <img src="images/star.png" alt="" />
//                   <img src="images/star.png" alt="" />
//                   <span>5</span>
//                 </div>
//                 <button>Contact Me</button>
//               </div>
//             </div>

//   <div className="box">
//     <div className="items">
//       <div className="item">
//         <span className="title">From</span>
//         <span className="desc">India</span>
//       </div>

//       <div className="item">
//         <span className="title">Member Since</span>
//         <span className="desc">Aug 2023</span>
//       </div>

//       <div className="item">
//         <span className="title">Avg. response time</span>
//         <span className="desc">4 hours</span>
//       </div>

//       <div className="item">
//         <span className="title">Last dilivery</span>
//         <span className="desc">1 day</span>
//       </div>

//       <div className="item">
//         <span className="title">Language</span>
//         <span className="desc">English</span>
//       </div>
//     </div>
//     <hr />
//     <p>
//       My name is Anna, I enjoy creating AI generated art in my spare
//       time. I have a lot of experience using the AI program and that
//       means I know what to prompt the AI with to get a great and
//       incredibly detailed result.
//     </p>
//   </div>
// </div>

// <div className="review">
//   <h2>Reviews</h2>
//   <div className="item">
//     <div className="user">
//       <img
//         src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
//         alt=""
//       />
//       <div className="info">
//         <span>Anna</span>
//         <div className="country">
//           <img
//             src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
//             alt=""
//           />
//           <span>India</span>
//         </div>
//       </div>
//     </div>
//     <div className="stars">
//       <img src="images/star.png" alt="" />
//       <img src="images/star.png" alt="" />
//       <img src="images/star.png" alt="" />
//       <img src="images/star.png" alt="" />
//       <img src="images/star.png" alt="" />
//       <span>5</span>
//     </div>
//     <p>
//       I just want to say that art_with_ai was the first, and after
//       this, the only artist Ill be using on Fiverr. Communication was
//       amazing, each and every day he sent me images that I was free to
//       request changes to. They listened, understood, and delivered
//       above and beyond my expectations. I absolutely recommend this
//       gig, and know already that Ill be using it again very very soon.
//     </p>
//     <div className="helpful">
//       <span>Helpful?</span>
//       <img src="images/like.png" alt="" />
//       <span>Yes</span>
//       <img src="images/dislike.png" alt="" />
//       <span>No</span>
//     </div>
//   </div>
//   <hr />
//   <div className="item">
//     <div className="user">
//       <img
//         src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
//         alt=""
//       />
//       <div className="info">
//         <span>Anna</span>
//         <div className="country">
//           <img
//             src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
//             alt=""
//           />
//           <span>India</span>
//         </div>
//       </div>
//     </div>
//     <div className="stars">
//       <img src="images/star.png" alt="" />
//       <img src="images/star.png" alt="" />
//       <img src="images/star.png" alt="" />
//       <img src="images/star.png" alt="" />
//       <img src="images/star.png" alt="" />
//       <span>5</span>
//     </div>
//     <p>
//       The designer took my photo for my book cover to the next level!
//       Professionalism and ease of working with designer along with
//       punctuality is above industry standards!! Whatever your project
//       is, you need this designer!
//     </p>
//     <div className="helpful">
//       <span>Helpful?</span>
//       <img src="images/like.png" alt="" />
//       <span>Yes</span>
//       <img src="images/dislike.png" alt="" />
//       <span>No</span>
//     </div>
//   </div>
//   <hr />
//   <div className="item">
//     <div className="user">
//       <img
//         src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
//         alt=""
//       />
//       <div className="info">
//         <span>Anna</span>
//         <div className="country">
//           <img
//             src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
//             alt=""
//           />
//           <span>India</span>
//         </div>
//       </div>
//     </div>
//     <div className="stars">
//       <img src="images/star.png" alt="" />
//       <img src="images/star.png" alt="" />
//       <img src="images/star.png" alt="" />
//       <img src="images/star.png" alt="" />
//       <img src="images/star.png" alt="" />
//       <span>5</span>
//     </div>
//     <p>
//       Amazing work! Communication was amazing, each and every day he
//       sent me images that I was free to request changes to. They
//       listened, understood, and delivered above and beyond my
//       expectations. I absolutely recommend this gig, and know already
//       that Ill be using it again very very soon
//     </p>
//     <div className="helpful">
//       <span>Helpful?</span>
//       <img src="images/like.png" alt="" />
//       <span>Yes</span>
//       <img src="images/dislike.png" alt="" />
//       <span>No</span>
//     </div>
//   </div>
// </div>
//         </div>
//         <div className="right"></div>
//       </div>
//     </div>
//   );
// };

// export default Gig;

// Gig.jsx

import React from "react";
import "./Gig.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Gig = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">CONNECT - GRAPHICS & DESIGN</span>
          <h1>I will create AI-generated art for you</h1>

          <div className="user">
            <img className="pp" src="/images/girl.png" alt="" />
            <span>Anna</span>
            <div className="stars">
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider {...settings}></Slider>
          <h2>About This Gig</h2>
          <p>
            I make use of an AI program to create images based on text prompts.
            This means I can help you to create a vision you have through a
            textual description of your scene without requiring any reference
            images. Some things I've found it often excels at are: Character
            portraits (E.g. a picture to go with your DnD character) Landscapes
            (E.g. wallpapers, illustrations to compliment a story) Logos (E.g.
            Esports team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>
          <div className="seller">
            <h2>About the seller</h2>
            <div className="user">
              <img src="/images/girl.png" alt="" />
              <div className="info">
                <span>Anna</span>
                <div className="stars">
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>

            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">India</span>
                </div>

                <div className="item">
                  <span className="title">Member Since</span>
                  <span className="desc">Aug 2023</span>
                </div>

                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>

                <div className="item">
                  <span className="title">Last dilivery</span>
                  <span className="desc">1 day</span>
                </div>

                <div className="item">
                  <span className="title">Language</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>

          <div className="review">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img className="pp" src="/images/girl.png" alt="" />
                <div className="info">
                  <span>Anna</span>
                  <div
                    className="country"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <img
                      src="/images/india.png"
                      alt=""
                      style={{ width: "20px", height: "15px" }}
                    />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div
                className="stars"
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <img
                  src="/images/star.png"
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                <img
                  src="/images/star.png"
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                <img
                  src="/images/star.png"
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                <img
                  src="/images/star.png"
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                <img
                  src="/images/star.png"
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                <span style={{ color: "gold", fontWeight: "bold" }}>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon.
              </p>
              <div
                className="helpful"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span>Helpful?</span>
                <img
                  src="/images/like.png"
                  alt="like"
                  style={{ width: "30px", height: "30px" }}
                />
                <span>Yes</span>
                <img
                  src="/images/dislike.png"
                  alt="dislike"
                  style={{ width: "30px", height: "30px" }}
                />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img className="pp" src="/images/girl.png" alt="" />
                <div className="info">
                  <span>Anna</span>
                  <div
                    className="country"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <img
                      src="/images/india.png"
                      alt=""
                      style={{ width: "20px", height: "15px" }}
                    />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div
                className="stars"
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <img
                  src="/images/star.png"
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                <img
                  src="/images/star.png"
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                <img
                  src="/images/star.png"
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                <img
                  src="/images/star.png"
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                <img
                  src="/images/star.png"
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                <span style={{ color: "gold", fontWeight: "bold" }}>5</span>
              </div>
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div
                className="helpful"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span>Helpful?</span>
                <img
                  src="/images/like.png"
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
                <span>Yes</span>
                <img
                  src="/images/dislike.png"
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img className="pp" src="/images/girl.png" alt="" />
                <div className="info">
                  <span>Anna</span>
                  <div
                    className="country"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <img
                      src="/images/india.png"
                      alt=""
                      style={{ width: "20px", height: "15px" }}
                    />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div
                className="stars"
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <img
                  src="/images/star.png"
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                <img
                  src="/images/star.png"
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                <img
                  src="/images/star.png"
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                <img
                  src="/images/star.png"
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                <img
                  src="/images/star.png"
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
                <span style={{ color: "gold", fontWeight: "bold" }}>5</span>
              </div>
              <p>
                Amazing work! Communication was amazing, each and every day he
                sent me images that I was free to request changes to. They
                listened, understood, and delivered above and beyond my
                expectations. I absolutely recommend this gig, and know already
                that Ill be using it again very very soon
              </p>
              <div
                className="helpful"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span>Helpful?</span>
                <img
                  src="/images/like.png"
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
                <span>Yes</span>
                <img
                  src="/images/dislike.png"
                  alt=""
                  style={{ width: "30px", height: "30px" }}
                />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="details">
            <div className="item">
              <img src="/images/clock.png" alt="" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item">
              <img src="/images/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/images/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="/images/greencheck.png" alt="" />
              <span>Artwork delivery</span>
            </div>
            <div className="item">
              <img src="/images/greencheck.png" alt="" />
              <span>Image upscaling</span>
            </div>
            <div className="item">
              <img src="/images/greencheck.png" alt="" />
              <span>Additional design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
