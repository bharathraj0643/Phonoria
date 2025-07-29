import React from "react";
import headerLogo from "/vite.svg";

import { TiArrowSortedDown } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  return (
    <>
      <header className="container mx-auto my-3 px-10 py-3 bg-(--phonoria-color-violet) max-w-7xl rounded-full">
        <div className="flex">
          <a href="" className="basis-1/4 shrink-0">
            <img src={headerLogo} alt="sm:phonoria-header-logo" />
          </a>
          <div className="flex basis-1/2 justify-center">
            <input type="search" className="bg-white rounded-md" />
          </div>
          <div className="hidden sm:flex basis-1/4 justify-end gap-5 text-white">
            <div className="flex items-center gap-1">
              <CgProfile />
              <span>Profile</span>
            </div>
            <div className="flex items-center gap-1">
              <FaCartShopping />
              <span>Cart</span>
            </div>
          </div>
        </div>
        <div className="flex mt-3 sm:hidden justify-end gap-5 text-white">
            <div className="flex items-center gap-1">
              <CgProfile />
              <span>Profile</span>
            </div>
            <div className="flex items-center gap-1">
              <FaCartShopping />
              <span>Cart</span>
            </div>
          </div>
      </header>
    </>
  );
}

export default Header;
