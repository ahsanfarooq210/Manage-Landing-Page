import React from "react";
import logo from "../../assets/logo-white.svg";
import iconFacebook from "../../assets/icon-facebook.svg";
import iconYoutube from "../../assets/icon-youtube.svg";
import iconTwitter from "../../assets/icon-twitter.svg";
import iconPintrest from "../../assets/icon-pinterest.svg";
import iconInstagram from "../../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md: flex-row md:space-y-0 ">
        {/* Logo and social links container */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          {/* logo   */}
          <div>
            <img src={logo} alt="logo" className="h-8" />
          </div>
          {/* social links container */}
          <div className="flex justify-center space-x-4 ">
            {/* link 1 */}
            <a href="#">
              <img src={iconFacebook} className="h-8" alt="" />
            </a>

            {/* link 2 */}
            <a href="#">
              <img src={iconYoutube} className="h-8" alt="" />
            </a>

            {/* link 3 */}
            <a href="#">
              <img src={iconTwitter} className="h-8" alt="" />
            </a>

            {/* link 4 */}
            <a href="#">
              <img src={iconPintrest} className="h-8" alt="" />
            </a>

            {/* link 5 */}
            <a href="#">
              <img src={iconInstagram} className="h-8" alt="" />
            </a>
          </div>
        </div>
        {/* list container  */}
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
