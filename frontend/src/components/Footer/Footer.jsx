import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Sumit Srivastav. I am a experienced Full-Stack Developer.
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Me</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/sumitme00117" target="blank">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/sumitme00117/" target="blank">
          <BsLinkedin />
        </a>
        <a href="https://www.youtube.com" target="blank">
          <BsYoutube />
        </a>
        <a href="https://www.instagram.com" target="blank">
          <BsInstagram/>
        </a>
      </div>
    </div>
  );
};

export default Footer;