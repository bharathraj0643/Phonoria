import React from "react";
import headerLogo from "/vite.svg";

import { TiArrowSortedDown } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  return (
    <>
      <div className="bg-(--phonoria-color-violet)">
        <header className="container mx-auto px-10 py-3 max-w-7xl ">
          <div className="flex gap-5">
            <div className="flex shrink-0">
              <a href="" className=" ">
                <img src={headerLogo} alt="sm:phonoria-header-logo" />
              </a>
            </div>
            <div className="flex gap-5 basis-1/4 shrink-0 justify-end">
              <div className="hidden sm:flex items-center text-white">
                <span>Categories</span>
                <TiArrowSortedDown />
              </div>
            </div>
            <div className="flex sm:hidden justify-start sm:justify-center gap-5 text-white w-full">
              <div className="flex items-center gap-1">
                <CgProfile />
                <span>Profile</span>
                <TiArrowSortedDown />
              </div>
              <div className="flex items-center gap-1">
                <FaCartShopping />
                <span>Cart</span>
              </div>
            </div>
            <div className="hidden sm:flex sm:basis-1/2 justify-center w-full">
              <input type="text" className="bg-white rounded-md w-full" />
            </div>
            <div className="hidden sm:flex basis-1/4 justify-end gap-5 text-white">
              <div className="flex items-center gap-1">
                <CgProfile />
                <span>Profile</span>
                <TiArrowSortedDown />
              </div>
              <div className="flex items-center gap-1">
                <FaCartShopping />
                <span>Cart</span>
              </div>
            </div>
          </div>
          <div className="flex sm:hidden items-center gap-5 mt-3">
            <div className="flex items-center text-white gap-1">
              <span>Categories</span>
              <TiArrowSortedDown />
            </div>
            <div className="flex sm:hidden sm:basis-1/2 justify-center w-full">
              <input type="search" className="bg-white rounded-md w-full" />
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
