import React from "react";
import { useState } from "react";
import "./portfolio.css";
import "./popup.css";
import PopupP1 from "./PopupP1";
import PopupP2 from "./PopupP2";
import PopupP3 from "./PopupP3";
import { FaGithub } from "react-icons/fa";
import IMG1 from "../../assets/project1.PNG";
import IMG2 from "../../assets/project2.PNG";
import IMG3 from "../../assets/project3.PNG";
import IMG4 from "../../assets/computerMock1.png";
import IMG5 from "../../assets/computerMock2.png";
import IMG6 from "../../assets/computerMock3.png";

const Portfolio = () => {
  const [buttonPopup1, setButtonPopup1] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);
  const [buttonPopup3, setButtonPopup3] = useState(false);
  return (
    <section id="portfolio">
      <h5>Explore My Work</h5>
      <h2>Portfolio</h2>
      <div className="portfolio_container_outer">
        <h2>Project Apps</h2>
        <div className="container portfolio_container1">
          <article className="portfolio_item">
            <div className="portfolio_item_img">
              <img src={IMG2} alt="Color Picker" />
            </div>
            <h3>The Wright Colors</h3>
            <div className="portfolio_item_cta">
              <a
                href="https://github.com/twwright119/color-picker"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://twwright119.github.io/color-picker/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>

            {/* ================ Popup Code ================== */}
            <div>
              <button
                className="btn_popup"
                onClick={() => setButtonPopup1(true)}
              >
                Read More
              </button>
            </div>
            <PopupP1 trigger={buttonPopup1} setTrigger={setButtonPopup1} />
            {/* ================ End Popup Code ================== */}
          </article>

          <article className="portfolio_item">
            <div className="portfolio_item_img">
              <img src={IMG1} alt="Color Picker" />
            </div>
            <h3>Score Keeper</h3>
            <div className="portfolio_item_cta">
              <a
                href="https://github.com/twwright119/Score-Keeper"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://twwright119.github.io/Score-Keeper/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>

            {/* ================ Popup Code ================== */}
            <div>
              <button
                className="btn_popup"
                onClick={() => setButtonPopup2(true)}
              >
                Read More
              </button>
            </div>
            <PopupP2 trigger={buttonPopup2} setTrigger={setButtonPopup2} />
            {/* ================ End Popup Code ================== */}
          </article>

          <article className="portfolio_item">
            <div className="portfolio_item_img">
              <img src={IMG3} alt="Color Picker" />
            </div>
            <h3>YelpCamp</h3>
            <div className="portfolio_item_cta">
              <a
                href="https://github.com/twwright119/YelpCamp"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://nameless-falls-86231.herokuapp.com/"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>

            {/* ================ Popup Code ================== */}
            <div>
              <button
                className="btn_popup"
                onClick={() => setButtonPopup3(true)}
              >
                Read More
              </button>
            </div>
            <PopupP3 trigger={buttonPopup3} setTrigger={setButtonPopup3} />
            {/* ================ End Popup Code ================== */}
          </article>
        </div>
        <h2>Websites</h2>
        <div className="container portfolio_container2">
          <article className="portfolio_item">
            <div className="portfolio_item_img">
              <img src={IMG4} alt="Color Picker" />
            </div>
            <h3>Little Silver Fish Company</h3>
            <div className="portfolio_item_cta">
              <a
                href="https://littlesilverfishcompany.com/"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
              </a>
            </div>
          </article>

          <article className="portfolio_item">
            <div className="portfolio_item_img">
              <img src={IMG5} alt="Color Picker" />
            </div>
            <h3>WOW Window Cleaning L.L.C.</h3>
            <div className="portfolio_item_cta">
              <a
                href="https://www.wowwindowcleaningllc.com/"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
              </a>
            </div>
          </article>

          <article className="portfolio_item">
            <div className="portfolio_item_img">
              <img src={IMG6} alt="Color Picker" />
            </div>
            <h3>Amy E Writes</h3>
            <div className="portfolio_item_cta">
              <a
                href="https://amyewrites.com/"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
