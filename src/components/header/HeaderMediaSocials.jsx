import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { AiFillMediumCircle } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header_socials_media">
      <a
        href="https://www.linkedin.com/in/thomas-wright-25778324a/"
        target="_blank"
        rel="noopener noreferrer"
        className="iconMedia"
      >
        <BsLinkedin size={30} />
      </a>
      <a
        href="https://github.com/twwright119"
        target="_blank"
        rel="noopener noreferrer"
        className="iconMedia"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://www.youtube.com/@TheWrightCode"
        target="_blank"
        rel="noopener noreferrer"
        className="iconMedia"
      >
        <GrYoutube size={30} />
      </a>
      <a
        href="https://medium.com/@thewrightcoder"
        target="_blank"
        rel="noopener noreferrer"
        className="iconMedia"
      >
        <AiFillMediumCircle size={30} />
      </a>
    </div>
  );
};

export default HeaderSocials;
