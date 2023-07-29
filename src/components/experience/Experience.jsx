import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import IconSlider from "./IconSlider";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>
      <div className="container silder-outer">
        <div className="icon-slider-container slider-inner">
          <IconSlider />
        </div>
      </div>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Bulma</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Node.Js</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>JQuery</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
          </div>
        </div>
        {/* End of Front End and Begin Back End */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Node.Js</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Express</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Mongoose</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>SQL</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Git &#40;CM&#41;</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>GitBash &#40;CM&#41;</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Java</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_icon" />
              <div>
                <h4>Python</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
