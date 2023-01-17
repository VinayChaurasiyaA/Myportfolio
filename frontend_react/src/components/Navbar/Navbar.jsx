import React from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";

import { images } from "../../constants";
import { useState } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <div>
          <h1 className="font-bold logonew">
            VIN
            <span>AY</span>
          </h1>
        </div>
        {/* <img src={images.logo} alt="logo" /> */}
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contacts"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <div className="app__navbar-resume app__flex">
          <a href={images.resume} download="Resume">
            <button value="download" className="app__navbar-button">
              Resume
            </button>
          </a>
        </div>
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4
          onClick={() => {
            setToggle(true);
          }}
        />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX
              onClick={() => {
                setToggle(false);
              }}
            />
            <ul>
              {[
                "home",
                "about",
                "work",
                "skills",
                "testimonials",
                "contacts",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => {
                      setToggle(false);
                    }}
                  >
                    {item}{" "}
                  </a>
                </li>
              ))}
              <a href={images.resume} download="Resume">
                <button value="download" className="app__navbar-button-mob">
                  Resume
                </button>
              </a>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
