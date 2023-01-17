import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./SocialMedia.scss";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="app__social" style={{ cursor: "pointer" }}>
      <div>
        <a href="https://twitter.com/_Vinay12" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://github.com/VinayChaurasiyaA" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/rajan.chaurasiya.12764/" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/iamvinay.12/" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
