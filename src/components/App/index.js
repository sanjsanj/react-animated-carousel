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
    let sliderRef;

    const settings = {
      onEdge: e => e === "left" && sliderRef.slickGoTo(0),
      slidesToShow: 1.3,
      slidesToScroll: 1,
      initialSlide: 0,
      infinite: false,
      dots: false,
    };

    const prev = () => {
      sliderRef.slickPrev();
    };

    const next = () => {
      sliderRef.slickNext();
    };

    return (
      <>
        <StyledSlider {...settings} ref={thisRef => (sliderRef = thisRef)}>
          {slides.map((slide, index) => (
            <Slide key={index} tall={slide === "tall"} />
          ))}
        </StyledSlider>

        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={prev}>
            Previous
          </button>
          <button className="button" onClick={next}>
            Next
          </button>
        </div>
      </>
    );
  }
}

export default App;
