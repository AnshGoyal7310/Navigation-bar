import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { data } from "../data/Links";

const NavLinks = () => {
   const [heading, setHeading] = useState("");
   const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {data.map((link, index) => (
        <div key={index}>
          {/* Desktop View */}
          <div className="px-3 text-left md:cursor-pointer group">
            <h1 className="py-7 flex items-center justify-between md:pr-0 pr-5" onClick={() => {heading !== link.name ? setHeading(link.name) : setHeading(""); setSubHeading("")}}>
               {link.name}
               {link?.sublinks?.length > 0 && (
                  <span className="text-xl md:mt-1 md:ml-2 inline md:hidden">
                     <i className={`${heading === link.name ? "fas fa-caret-up" : "fas fa-caret-down"}`}></i>
                  </span>
               )}
            </h1>
            {link?.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 absolute left-3 mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                    {link.sublinks.map((mysublinks, index) => (
                      <div key={index}>
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink, index) => (
                          <li className="text-sm text-gray-600 my-2.5" key={index}>
                            <NavLink
                              to={slink.link}
                              className={"hover:text-primary"}
                            >
                              {slink.name}
                            </NavLink>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile View */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {/* sublinks */}
            {link.sublinks?.map((slink, index) => (
               <div key={index}>
                  <div>
                     <h1 onClick={() => subHeading !== slink.Head ? setSubHeading(slink.Head) : setSubHeading("")} className="py-4 pl-7 font-semibold flex items-center justify-between md:pr-0 pr-5">
                        {slink.Head}
                        <span className="text-xl md:mt-1 md:ml-2 inline">
                           <i className={`${subHeading === slink.Head ? "fas fa-caret-up" : "fas fa-caret-down"}`}></i>
                        </span>
                     </h1>
                     <div className={`${subHeading === slink.Head ? "md:hidden" : "hidden"}`}>
                        {slink.sublink.map((slink, index) => (
                           <li className="py-3 pl-14 text-sm text-gray-600" key={index}>
                              <NavLink to={slink.link}>{slink.name}</NavLink>
                           </li>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
