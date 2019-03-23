import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide from "../Slide";

const slides = ["tall", "short", "tall", "short", "tall"];

class App extends React.Component {
  render() {
    const settings = {
      slidesToShow: 1.3,
      slidesToScroll: 1,
      infinite: false,
      dots: false,
    };

    return (
      <div>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <Slide key={index} tall={slide === "tall"} />
          ))}
        </Slider>
      </div>
    );
  }
}

export default App;
