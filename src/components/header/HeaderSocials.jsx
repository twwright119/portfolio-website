import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { AiFillMediumCircle } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/thomas-wright-25778324a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/twwright119"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.youtube.com/@TheWrightCode"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GrYoutube />
      </a>
      <a
        href="https://medium.com/@thewrightcoder"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillMediumCircle />
      </a>
    </div>
  );
};

export default HeaderSocials;
