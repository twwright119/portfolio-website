import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./experience.css";
import { SiJavascript } from "react-icons/si";
import { SiJava } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiGit } from "react-icons/si";

const IconSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 50,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      <div>
        <SiJavascript size={75} className="slider_icon" />
      </div>
      <div>
        <SiHtml5 size={75} className="slider_icon" />
      </div>
      <div>
        <SiCss3 size={75} className="slider_icon" />
      </div>
      <div>
        <SiBootstrap size={75} className="slider_icon" />
      </div>
      <div>
        <SiNodedotjs size={75} className="slider_icon" />
      </div>
      <div>
        <SiReact size={75} className="slider_icon" />
      </div>
      <div>
        <SiMongodb size={75} className="slider_icon" />
      </div>
      <div>
        <SiPython size={75} className="slider_icon" />
      </div>
      <div>
        <SiJava size={75} className="slider_icon" />
      </div>
      <div>
        <SiMysql size={75} className="slider_icon" />
      </div>
      <div>
        <SiGit size={75} className="slider_icon" />
      </div>
    </Slider>
  );
};

export default IconSlider;
