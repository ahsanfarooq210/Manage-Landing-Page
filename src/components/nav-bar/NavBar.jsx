import React from "react";
import logo from "../../assets/logo.svg";

const NavBar = () => {
  return (
    // nav bar
    <nav className="relative container p-6 mx-auto">
      {/* flex container */}
      <div className="flex flex-row items-center justify-between">
        {/* logo */}
        <div className="pt-2">
          <img src={logo} alt="logo" />
        </div>
        {/* menu items */}
        <div className="hidden md:flex space-x-6 ">
          <a href="#" className="hover:text-darkGrayishBlue duration-300">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue duration-300">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue duration-300">
            About Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue duration-300">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue duration-300">
            Community
          </a>
        </div>
        {/* button */}
        <a
          href="#"
          className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight duration-500">
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
