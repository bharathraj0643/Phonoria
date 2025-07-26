import React from "react";

import footerLogo from "/vite.svg";

function Footer() {
  return (
    <footer className="bg-(--phonoria-color-violet)">
      <div className="container mx-auto 2xl:max-w-7xl grid sm:grid-cols-12 gap-4 p-4">
        <div className="sm:col-span-2 place-items-center">
          <img src={footerLogo} alt="phonoria-footer-logo" />
        </div>
        <nav className="sm:col-span-10">
          <ul className="grid sm:grid-cols-4 grid-cols-2 gap-4">
            <li className="text-white">
              <span className="font-semibold">Categories</span>
              <ul className="text-gray-300">
                <li>
                  <a href="">Budget phones</a>
                </li>
                <li>
                  <a href="">Midrange phones</a>
                </li>
                <li>
                  <a href="">Upper Midrange phones</a>
                </li>
                <li>
                  <a href="">Flapship-Killers phones</a>
                </li>
                <li>
                  <a href="">Flapship phones</a>
                </li>
              </ul>
            </li>
            <li className="text-white">
              <span className="font-semibold">Mobile Brands</span>
              <ul className="text-gray-300">
                <li>
                  <a href="">Samsung phones</a>
                </li>
                <li>
                  <a href="">iPhone phones</a>
                </li>
                <li>
                  <a href="">OnePlus phones</a>
                </li>
                <li>
                  <a href="">Pixel phones</a>
                </li>
              </ul>
            </li>
            <li className="text-white">
              <span className="font-semibold">Mobile Lists</span>
              <ul className="text-gray-300">
                <li>
                  <a href="">Samsung phones</a>
                </li>
                <li>
                  <a href="">iPhone phones</a>
                </li>
                <li>
                  <a href="">OnePlus phones</a>
                </li>
                <li>
                  <a href="">Pixel phones</a>
                </li>
              </ul>
            </li>
            <li className="text-white">
              <span className="font-semibold">Contact</span>
              <ul className="text-gray-300">
                <li>
                  <a href="">About Phonoria</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Compare Mobiles</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <p className="text-center text-white p-5">2025 Company</p>
    </footer>
  );
}

export default Footer;
