import React from "react";
import { Carousel } from "react-responsive-carousel";
// carousel css file
import "react-responsive-carousel/lib/styles/carousel.min.css";
// images
import nykaa from "./sliderImages/nykaa.jpg";
import colorpop from "./sliderImages/colorpop.gif";
import turtsiya from "./sliderImages/turtsiya.jpg";
import all from "./sliderImages/all.jpg";
import all1 from "./sliderImages/all2.gif";
import oborudovanie from "./sliderImages/oborudovanie.jpg";
import styled from "styled-components";
import { small } from "./responsive";

const SliderDiv = styled.div`
  ${small({ display: "none", height: "300px" })}
  overflow: hidden;
  img {
    height: 300px;
    object-fit: cover;
  }
`;

const Slider = () => {
  return (
    <SliderDiv>
      <Carousel showThumbs={false} showStatus={false} autoPlay interval="2000" infiniteLoop>
        <div>
          <img src={all} alt="image" />
        </div>
        <div>
          <img src={nykaa} alt="image" />
        </div>
        <div>
          <img src={colorpop} alt="image" />
        </div>
        <div>
          <img src={turtsiya} alt="image" />
        </div>
        <div>
          <img src={all1} alt="image" />
        </div>
        <div>
          <img src={oborudovanie} alt="image"/>
        </div>
      </Carousel>
    </SliderDiv>
  );
};

export default Slider;
