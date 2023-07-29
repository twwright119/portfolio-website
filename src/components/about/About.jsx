import React from "react";
import "./about.css";
import Me from "../../assets/squareProfilePic2.png";
import { FaAward } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Me} alt="Thomas Wright" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Junior Developer</small>
            </article>
            <article className="about_card">
              <FaCogs className="about_icon" />
              <h5>Skills</h5>
              <small>Full Stack</small>
            </article>
            <article className="about_card">
              <BsPersonLinesFill className="about_icon" />
              <h5>Attributes</h5>
              <small>Passionate, Dedicated, Quick Learner</small>
            </article>
          </div>
          <p>
            My name is Thomas Wright. I am a Junior Full Stack Developer out of
            New Jersey. I have a passion for creating modern yet attractive UI.
            I started freelancing web design for local business around me and
            grew to have a hunger to learn more.
            <br />
            <br />
            I am an investigative and determined problem solver, with extreme
            attention to detail. I have a keen ability to pick up on new things
            and apply them without much direction. Other than my interest in
            coding, I enjoy Brazilian Jiu Jitsu, golfing, and I love to surf,
            skate, and snowboard!
            <br />
            <br />I am interested in freelancing website development project,
            especially with small businesses, and I am open to new working
            opportunities
          </p>
          <a href="/#contact" className="btn btn-primary">
            Lets Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
