import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Features from "../../components/features/Features";
import LogoMaker from "../../components/logoMaker/LogoMaker";
import Slide from "../../components/Slide/Slide";
import { cards, projects, vPro } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import Explore from "../../components/explore/Explore";
import Sliders from "../../components/slider/Sliders";
import VidCard from "../../components/vidCard/VidCard";
import Description from "../../components/description/Description";

const Home = () => {
  const pCardHeading = "Inspiring work made on Connect";
  const cCardHeading = "Popular Works";
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide heading={cCardHeading} slidesToShow={5} slidesToScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card}></CatCard>
        ))}
      </Slide>
      <Description />
      <Explore />
      <Features />
      <Sliders slidesToShow={1} slidesToScroll={1}>
        {vPro.map((card) => (
          <VidCard key={card.id} item={card}></VidCard>
        ))}
      </Sliders>
      <LogoMaker />
      <Slide heading={pCardHeading} slidesToShow={4} slidesToScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} item={card}></ProjectCard>
        ))}
      </Slide>

      <div className="bt">
        <div className="container">
          <div className="left">
            <h1>
              Suddenly it's all so <i>doable.</i>
            </h1>
            <button className="button">Search</button>
          </div>

          <div className="right">
            <img src="images/coding.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
