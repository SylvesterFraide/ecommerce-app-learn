import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from "react-router-dom";

const Searchbar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

    const location = useLocation();

    

  return showSearch ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 ">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="flex-1 outline-none background-inherit text-sm"
        />
        <SearchIcon />
      </div>
      <CloseIcon onClick={() => setShowSearch(false)}  className="cursor-pointer"/>
    </div>
  ) : null;
};

export default Searchbar;
