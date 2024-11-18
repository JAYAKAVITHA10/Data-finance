import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Brand</h1>
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer hover:underline">
          <ScrollLink to="home" smooth={true} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li className="p-4 cursor-pointer hover:underline">
          <ScrollLink to="company" smooth={true} duration={500}>
            Company
          </ScrollLink>
        </li>
        <li className="p-4 cursor-pointer hover:underline">
          <ScrollLink to="resources" smooth={true} duration={500}>
            Resources
          </ScrollLink>
        </li>
        <li className="p-4 cursor-pointer hover:underline">
          <ScrollLink to="about" smooth={true} duration={500}>
            About
          </ScrollLink>
        </li>
        <li className="p-4 cursor-pointer hover:underline">
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Brand</h1>
        <li className="p-4 border-b border-gray-600 cursor-pointer hover:underline">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            onClick={handleNav}
          >
            Home
          </ScrollLink>
        </li>
        <li className="p-4 border-b border-gray-600 cursor-pointer hover:underline">
          <ScrollLink
            to="company"
            smooth={true}
            duration={500}
            onClick={handleNav}
          >
            Company
          </ScrollLink>
        </li>
        <li className="p-4 border-b border-gray-600 cursor-pointer hover:underline">
          <ScrollLink
            to="resources"
            smooth={true}
            duration={500}
            onClick={handleNav}
          >
            Resources
          </ScrollLink>
        </li>
        <li className="p-4 border-b border-gray-600 cursor-pointer hover:underline">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            onClick={handleNav}
          >
            About
          </ScrollLink>
        </li>
        <li className="p-4 cursor-pointer hover:underline">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            onClick={handleNav}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
