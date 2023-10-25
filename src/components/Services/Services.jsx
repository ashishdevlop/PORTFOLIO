import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Resume.pdf";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
const Services = () => {
  const transition = { duration: 1, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ispum dummy text are usually use in section where you should
          replace
          <br />
          Lorem ispum dummy text are usually use in section where you should
          replace
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          whileInView={{ left: "16rem" }}
          initial={{ left: "18rem" }}
          style={{ left: "14rem" }}
          transition={transition}
        >
          {/* 12rem */}
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe xd"}
          />
        </motion.div>

        {/* second card */}
        <motion.div
          whileInView={{ left: "-4rem" }}
          initial={{ left: "-12rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-2rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Devloper"}
            detail={"Html, Css, JavaScript, React,"}
          />
        </motion.div>
        {/* 3rd */}

        <motion.div
          whileInView={{ left: "16rem" }}
          initial={{ left: "20rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          {/* 12 rem default and changed to 16 rem */}
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem  ispum dummy text are usually use in section where you should replace"
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
