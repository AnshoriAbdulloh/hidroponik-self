// import { useState, useEffect } from "react";

import { LuHeadset, LuSettings } from "react-icons/lu";
import { RiUserLine } from "react-icons/ri";

import Logo from "../assets/img/logo.png";

export default function Navbar() {
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 10) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };
  //   window.addEventListener(`scroll`, handleScroll);
  //   return () => window.removeEventListener(`scroll`, handleScroll);
  // }, []);

  return (
    <nav
      className={`bg-white lg:max-w-5xl md:max-w-3xl w-full h-14 py-8 px-3 flex items-center justify-between sticky top-0 z-50 transition-all duration-1000`}
    >
      <h1
        className={`relative group font-dm_sans-medium sm:pointer-events-none`}
      >
        <span className={`flex items-center font-bold text-2xl`}>
          <img src={Logo} alt='logo' className={`w-10 h-10 `} />
          HIDROPONIK
        </span>
        <div
          className={`absolute left-2 bg-white rounded-md w-52 mt-2 border border-black/10 opacity-0 invisible transition-all duration-300 
          
          group-hover:opacity-100 group-hover:visible 
          
          *:list-none *:p-3 *:text-md *:hover:bg-gray-200 *:rounded-md`}
        >
          <li>Home</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
        </div>
      </h1>
      <div className={`flex items-center gap-5`}>
        <ul
          className={`flex gap-6 font-dm_sans-medium opacity-0 invisible sm:opacity-100 sm:visible`}
        >
          <li>Home</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
        </ul>
        <div className={`relative group cursor-pointer mr-3`}>
          <RiUserLine
            size={22}
            className={`bg-[#b4e069] w-7 h-7 p-2 text-2xl font-dm_sans-medium box-content rounded-full flex items-center justify-center`}
          />
          <div
            className={`absolute right-0 mt-2 w-52 rounded-md border border-black/10 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}
          >
            <a
              href='#'
              className={`flex items-center gap-2 p-3 rounded-md hover:bg-gray-200`}
            >
              <LuHeadset size={21} />
              <span>Contact Person</span>
            </a>
            <a
              href='#'
              className={`flex items-center gap-2 p-3 rounded-md hover:bg-gray-200`}
            >
              <LuSettings size={22} />
              <span>Settings</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
