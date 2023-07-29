import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../assets/bitmoji1.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h4>&lt;The Wright Coder&gt;</h4>
        <h1>Thomas Wright</h1>
        <h5 className="text-light">A Fullstack Developer</h5>
        <CTA />

        <div className="header_grid">
          <div className="socials_div">
            <HeaderSocials />
          </div>

          <div className="me">
            <img src={Me} alt="me" className="bitmoji1" />
          </div>
          <div className="scroll_div">
            <a href="#contact" className="scroll_down">
              Scroll Down
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
