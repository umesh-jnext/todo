import React from "react";
import Slider from "react-slick";
import sliderimg1 from "../img/01.jpg";
import sliderimg2 from "../img/02.jpg";
import sliderimg3 from "../img/03.jpg";
import sliderimg4 from "../img/04.jpg";
import sliderimg5 from "../img/05.jpg";
import sliderimg6 from "../img/06.jpg";

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="container">
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <img
            src={sliderimg1}
            alt="slider-img"
            height="400px"
            width="1320px"
          />
        </div>
        <div>
          <img
            src={sliderimg2}
            alt="slider-img"
            height="400px"
            width="1320px"
          />
        </div>
        <div>
          <img
            src={sliderimg3}
            alt="slider-img"
            height="400px"
            width="1320px"
          />
        </div>
        <div>
          <img
            src={sliderimg4}
            alt="slider-img"
            height="400px"
            width="1320px"
          />{" "}
        </div>
        <div>
          <img
            src={sliderimg5}
            alt="slider-img"
            height="400px"
            width="1320px"
          />
        </div>
        <div>
          <img
            src={sliderimg6}
            alt="slider-img"
            height="400px"
            width="1320px"
          />
        </div>
      </Slider>
    </div>
  );
};
export default SlickSlider;
