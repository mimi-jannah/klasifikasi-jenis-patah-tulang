import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "./images/logo.png"; // Adjust the path to your logo image

function Header() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <header>
      <nav className="fixed top-0 w-full z-50 border-gray-200 px-4 lg:px-6 py-2.5" style={{ backgroundColor: "#E1EEFF" }}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center">
            <img src={logo} className="h-12 mr-3" alt="BoneGuard Logo" /> {/* Adjust the image size */}
            <span className="self-center text-xl font-black whitespace-nowrap text-[#000000]">
              Bone<span style={{ color: "#0360D9" }}>Guard</span>
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="#Predict"
              className="text-white hover:bg-black bg-[#0360D9] focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Contact Us
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onSetActive={() => handleSetActive("Home")}
                  className={`block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 ${
                    activeLink === "Home" ? "text-[#0360D9]" : "text-black-400"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="aboutus"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onSetActive={() => handleSetActive("About Us")}
                  className={`block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 ${
                    activeLink === "About Us" ? "text-[#0360D9]" : "text-black-400"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="manfaat"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onSetActive={() => handleSetActive("Manfaat")}
                  className={`block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 ${
                    activeLink === "Data" ? "text-[#0360D9]" : "text-black-400"
                  }`}
                >
                  Data
                </Link>
              </li>
              <li>
                <Link
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onSetActive={() => handleSetActive("Team")}
                  className={`block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 ${
                    activeLink === "Team" ? "text-[#0360D9]" : "text-black-400"
                  }`}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="imageprocessing"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onSetActive={() => handleSetActive("ImageProcessing")}
                  className={`block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 ${
                    activeLink === "ImageProcessing" ? "text-[#0360D9]" : "text-black-400"
                  }`}
                >
                  Data Processing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
