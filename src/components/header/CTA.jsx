import React from "react";
import Resume from "../../assets/TWResume2022.pdf";
import HeaderSocialsMedia from "./HeaderMediaSocials";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
      <HeaderSocialsMedia />
    </div>
  );
};

export default CTA;
