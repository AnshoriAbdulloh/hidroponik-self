import { useState, useRef, useEffect } from "react";
// import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

import { LuHeadset, LuSettings } from "react-icons/lu";
import { RiUserLine } from "react-icons/ri";

import Logo from "../assets/img/logo.png";
import LanguageDropdown from "./LanguageDropdown";

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

  // const { t, i18n } = useTransition();

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      </h1>
      <div className={`flex items-center gap-5`}>
        <div
          className={`sm:flex hidden gap-6 font-dm_sans-medium opacity-0 invisible sm:opacity-100 sm:visible *:cursor-pointer *:hover:opacity-60`}
        >
          <Link to='Hero' smooth={true} duration={500} offset={-56}>
            Home
          </Link>
          <Link to='Why' smooth={true} duration={500} offset={-56}>
            Why
          </Link>
          <Link to='Plants' smooth={true} duration={500} offset={-60}>
            Plants
          </Link>
          <Link to='About' smooth={true} duration={500} offset={-56}>
            About
          </Link>
        </div>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          ref={menuRef}
          className={`relative group cursor-pointer mr-3`}
        >
          <RiUserLine
            size={22}
            className={`bg-[#b4e069] w-7 h-7 p-2 text-2xl font-dm_sans-medium box-content rounded-full flex items-center justify-center`}
          />
          <div
            className={`
            ${open ? `opacity-100 visible` : `opacity-0 invisible`}
            absolute right-0 mt-2 w-52 rounded-md border border-black/10 bg-white opacity-0 invisible transition-all duration-300
            group-hover:opacity-100 group-hover:visible`}
          >
            <div className={`sm:hidden `}>
              <Link
                to='Hero'
                smooth={true}
                duration={500}
                offset={-56}
                className={`flex items-center gap-2 p-3 rounded-md hover:bg-gray-200`}
              >
                <span>Home</span>
              </Link>
              <Link
                to='Why'
                smooth={true}
                duration={500}
                offset={-56}
                className={`flex items-center gap-2 p-3 rounded-md hover:bg-gray-200`}
              >
                <span>Why Hidroponik</span>
              </Link>
              <Link
                to='Plants'
                smooth={true}
                duration={500}
                offset={-60}
                className={`flex items-center gap-2 p-3 rounded-md hover:bg-gray-200`}
              >
                <span>Plants</span>
              </Link>
              <Link
                to='About'
                smooth={true}
                duration={500}
                offset={-56}
                className={`flex items-center gap-2 p-3 rounded-md hover:bg-gray-200`}
              >
                <span>About</span>
              </Link>
            </div>
            <hr className={`text-gray-300 m-2 sm:hidden`} />
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
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </nav>
  );
}
