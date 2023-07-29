import React from "react";
import "./nav.css";
import { GoHome } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("/#");
  return (
    <nav>
      <a
        href="/#"
        onClick={() => setActiveNav("/#")}
        className={activeNav === "/#" ? "active" : " "}
      >
        <GoHome />
      </a>
      <a
        href="/#about"
        onClick={() => setActiveNav("/#about")}
        className={activeNav === "/#about" ? "active" : " "}
      >
        <AiOutlineUser />
      </a>
      <a
        href="/#experience"
        onClick={() => setActiveNav("/#experience")}
        className={activeNav === "/#experience" ? "active" : " "}
      >
        <BiBook />
      </a>
      <a
        href="/#portfolio"
        onClick={() => setActiveNav("/#portfolio")}
        className={activeNav === "/#portfolio" ? "active" : " "}
      >
        <AiOutlineFolderOpen />
      </a>
      <a
        href="/#contact"
        onClick={() => setActiveNav("/#contact")}
        className={activeNav === "/#contact" ? "active" : " "}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
