import React from "react";
import "./Footer.css";
import { BsInstagram } from "react-icons/bs";
import {
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineCopyright,
} from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";

function Footer() {
  return (
    <div className="footer">
      <div className="subscription">
        <h2>
          Join the Adventure newsletter to receive our best vacation deals
        </h2>
        <p>You can unsubscribe at any time</p>
        <div className="log">
          <input placeholder="Your email" type="text" /> <br />
          <button className="subscribe">Subscibe</button>
        </div>
      </div>
      <div className="main-info">
        <div className="information">
          <div className="about-us">
            <h2>About Us</h2>
            <p>How it works</p>
            <p>Testemonials</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Terms of Service</p>
          </div>
          <div className="videos">
            <h2>Videos</h2>
            <p>Submit Video</p>
            <p>Ambassadors</p>
            <p>Agency</p>
            <p>Influencer</p>
          </div>
        </div>
        <div className="information">
          <div className="contact-us">
            <h2>Contact Us</h2>
            <p>Contact</p>
            <p>Support</p>
            <p>Destinations</p>
            <p>Sponsorships</p>
          </div>
          <div className="social-media">
            <h2>Soical Media</h2>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Youtube</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>

      <div className="contact">
        <h1>trvl</h1>
        <p>
          trvl <AiOutlineCopyright /> 2022
        </p>
        <div className="icons">
          <GrFacebookOption className="facebook" />
          <BsInstagram className="instagram" />
          <AiFillYoutube className="youtube" />
          <FaTwitter className="twitter" />
          <AiFillLinkedin className="linkedin" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
