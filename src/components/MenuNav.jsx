import { useState } from "react";
import Logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import Button from "./Button";

const MenuNav = () => {
   const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="flex items-center justify-around font-medium">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
            <i className={`${open ? "fas fa-times" : "fas fa-bars"}`}></i>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-8 font-[poppins] uppercase">
          <li>
            <NavLink to={"/"} className={"py-7 px-3 inline-block"}>
              Home
            </NavLink>
          </li>
          <NavLinks />
        </ul>

        <div className="hidden md:block">
          <Button />
        </div>

        {/* Mobile Navigation */}
        <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
          <li>
            <NavLink to={"/"} className={"py-7 px-3 inline-block"}>
              Home
            </NavLink>
          </li>
          <NavLinks />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default MenuNav;
