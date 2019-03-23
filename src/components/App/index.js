import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide from "../Slide";

const slides = ["tall", "short", "tall", "short", "tall"];

const StyledSlider = styled(Slider)`
  .slick-track {
    align-items: center;
    display: flex;
  }
`;

class App extends React.Component {
  render() {
    const settings = {
      slidesToShow: 1.3,
      slidesToScroll: 1,
      initialSlide: 0,
      infinite: false,
      dots: false,
    };

    return (
      <div>
        <StyledSlider {...settings}>
          {slides.map((slide, index) => (
            <Slide key={index} tall={slide === "tall"} />
          ))}
        </StyledSlider>
      </div>
    );
  }
}

export default App;
