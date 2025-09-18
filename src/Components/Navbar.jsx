import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = ({ home, collection, about, contact }) => {
  const [activeMenu, setActiveMenu] = useState("home");
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <h3 className="w-36">Logo</h3>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink
          onClick={() => setActiveMenu("home")}
          to="/"
          className="flex flex-col items-center gap-1"
        >
          <p>{home}</p>

          <hr
            className={
              activeMenu === "home" ? "w-2/4 h-[1.5px] bg-gray-700" : ""
            }
          />
        </NavLink>

        <NavLink
          onClick={() => setActiveMenu("collection")}
          to="/collection"
          className="flex flex-col items-center gap-1"
        >
          <p>{collection}</p>
          <hr
            className={
              activeMenu === "collection" ? "w-2/4 h-[1.5px] bg-gray-700" : ""
            }
          />
        </NavLink>

        <NavLink
          onClick={() => setActiveMenu("about")}
          to="/about"
          className="flex flex-col items-center gap-1"
        >
          <p>{about}</p>
          <hr
            className={
              activeMenu === "about" ? "w-2/4 h-[1.5px] bg-gray-700" : ""
            }
          />
        </NavLink>

        <NavLink
          onClick={() => setActiveMenu("contact")}
          to="/contact"
          className="flex flex-col items-center gap-1"
        >
          <p>{contact}</p>
          <hr
            className={
              activeMenu === "contact" ? "w-2/4 h-[1.5px] bg-gray-700" : ""
            }
          />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <SearchIcon />

        <div className="group relative">
          <PersonIcon />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Navbar;
