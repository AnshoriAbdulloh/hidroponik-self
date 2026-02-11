import { useState, useRef, useEffect, useContext } from "react";
// import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { UserContext } from "../context/UserContext";
import { useTranslation } from "react-i18next";

import { LuHeadset, LuSettings } from "react-icons/lu";
import { RiUserLine } from "react-icons/ri";
import { IoLanguageOutline } from "react-icons/io5";

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

  // const { t, i18n } = useTransition();

  const { t, i18n } = useTranslation();
  const user = useContext(UserContext);
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
            {t("navbar.home")}
          </Link>
          <Link to='Why' smooth={true} duration={500} offset={-56}>
            {t("navbar.why")}
          </Link>
          <Link to='Plants' smooth={true} duration={500} offset={-60}>
            {t("navbar.plants")}
          </Link>
          <Link to='About' smooth={true} duration={500} offset={-56}>
            {t("navbar.about")}
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
            <div className={``}>
              <h1 className={`p-3`}>
                {t("navbar.hello")} {user}
              </h1>
              <hr className={`mx-2 text-gray-300`} />
            </div>

            <div className={`sm:hidden `}>
              <Link
                to='Hero'
                smooth={true}
                duration={500}
                offset={-56}
                className={`flex items-center gap-2 p-3 rounded-md hover:bg-gray-200`}
              >
                <span>{t("navbar.home")}</span>
              </Link>
              <Link
                to='Why'
                smooth={true}
                duration={500}
                offset={-56}
                className={`flex items-center gap-2 p-3 rounded-md hover:bg-gray-200`}
              >
                <span>{t("navbar.why")}</span>
              </Link>
              <Link
                to='Plants'
                smooth={true}
                duration={500}
                offset={-60}
                className={`flex items-center gap-2 p-3 rounded-md hover:bg-gray-200`}
              >
                <span>{t("navbar.plants")}</span>
              </Link>
              <Link
                to='About'
                smooth={true}
                duration={500}
                offset={-56}
                className={`flex items-center gap-2 p-3 rounded-md hover:bg-gray-200`}
              >
                <span>{t("navbar.about")}</span>
              </Link>
            </div>
            <hr className={`text-gray-300 m-2 sm:hidden`} />
            <a
              href='#'
              className={`flex items-center gap-2 p-3 rounded-md hover:bg-gray-200`}
            >
              <LuHeadset size={21} />
              <span>{t("navbar.contact")}</span>
            </a>
            <a
              href='#'
              className={`flex items-center gap-2 p-3 rounded-md hover:bg-gray-200`}
            >
              <LuSettings size={22} />
              <span>{t("navbar.settings")}</span>
            </a>
            <div>
              <a
                href='#'
                className={`flex items-center gap-2 p-3 rounded-md hover:bg-gray-200`}
                onClick={(e) => {
                  setOpen(!open);
                  e.preventDefault();
                }}
              >
                <IoLanguageOutline size={22} />
                <span>{t("navbar.language")}</span>
              </a>
              <div
                className={`${open ? `h-24.5` : `h-0`} pl-4 overflow-hidden transition-all duration-500 ease-in-out`}
              >
                <div
                  onClick={() => i18n.changeLanguage("id")}
                  className={`flex items-center gap-2 p-3 rounded-md hover:bg-gray-200`}
                >
                  <span>Indonesia</span>
                </div>
                <div
                  onClick={() => i18n.changeLanguage("id")}
                  className={`flex items-center gap-2 p-3 rounded-md hover:bg-gray-200`}
                >
                  <span>English</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
