import React,{useState} from "react";
import logo from "../../assets/logo.svg";
import "./NavBar.css";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
        {/* hamburger icon */}
        <button
          id="menu-btn"
          className={`${isMobileMenuOpen?"open":""} block hamburger md:hidden focus:outline-none `}
          onClick={() => {
            setIsMobileMenuOpen((prevValue)=>{
              return !prevValue
            })
          }}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* mobile menu */}
      <div className="md:hidden ">
        <div
          id="menu"
          className={`${isMobileMenuOpen? "flex":"hidden"} absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
          <a href="#" className="">
            Pricing
          </a>
          <a href="#" className="">
            Product
          </a>
          <a href="#" className="">
            About Us
          </a>
          <a href="#" className="">
            Careers
          </a>
          <a href="#" className="">
            Community
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
