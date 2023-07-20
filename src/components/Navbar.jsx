import React, { useState } from "react";
import { close, logo, menu } from "../assets/index";
import { navLinks } from "../constants/Data";
import { outerLink } from "../data/Data";

const Navbar = () => {
   const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 items-center justify-between navbar">
      <img src="http://sdussl.victoriousinfotech.com/assets/images/logo1234.jpg" alt="logo" className="w-[100px] sm:w-[300px] cursor-pointer" />
      <ul className="list-none hidden sm:flex justify-end items-center flex-1">
         {outerLink.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-base text-black ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
               <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
         ))}
      </ul>

      <div className="sm:hidden flex justify-end items-center flex-1">
         <img src={toggle ? close : menu} alt="menuImage" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle((prev) => !prev)} />
         <div className={`${toggle ? "flex" : "hidden"} p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar transition-all ease-in-out`}>
            <ul className="list-none flex flex-col justify-end items-center flex-1">
               {outerLink.map((nav, index) => (
                  <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-base text-white ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}>
                     <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
               ))}
            </ul>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;
