import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Navbar = ({ home, collection, about, contact }) => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [visible, setVisible] = useState(false);

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

        <Link to="/cart" className="relative">
          <ShoppingCartIcon />
          <p className="absolute -top-2 -right-1 bg-red-500 text-white rounded-full text-xs px-1">
            29
          </p>
        </Link>

        <div
          className="cursor-pointer sm:hidden"
          onClick={() => setVisible(true)}
        >
          <MenuIcon />
        </div>

        {/* sidebar menu for small screen */}
        <div
          className={`absolute top-0 bottom-0 overflow-hidden bg-white transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              className="flex items-center gap-4 p-3 cursor-pointer"
              onClick={() => setVisible(false)}
            >
              <ArrowBackIosIcon />
              <p>Back</p>
            </div>
            <div className="bg-slate-200 flex flex-col gap-1 py-3">
              {" "}
              <NavLink
                to="/"
                className="py-2 pl-6 border-b border-slate-300 hover:text-black"
                onClick={() => setVisible(false)}
              >
                {home}
              </NavLink>
              <NavLink
                to="/collection"
                className="py-2 pl-6 border-b border-slate-300 hover:text-black"
                onClick={() => setVisible(false)}
              >
                {collection}
              </NavLink>
              <NavLink
                to="/about"
                className="py-2 pl-6 border-b border-slate-300 hover:text-black"
                onClick={() => setVisible(false)}
              >
                {about}
              </NavLink>
              <NavLink
                to="/contact"
                className="py-2 pl-6 hover:text-black "
                onClick={() => setVisible(false)}
              >
                {contact}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;