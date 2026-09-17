import { useEffect, useState } from "react";
import "./Header.css";
import Menu from "./Menu";
import menuIcon from "../assets/icons/menu-icon.svg";
import bag from "../assets/icons/bag.svg";
import userLogo from "../assets/icons/userLogo.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`header flex fixed top-0 left-0 right-0 h-12 z-40 items-center px-4 sm:px-5 ${
          scrolled ? "header--scrolled" : ""
        }`}
      >
        <div className="flex flex-1 min-w-0 items-center">
          <button
            className="flex items-center"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <img className="h-10 lg:h-11" src={menuIcon} alt="" />
          </button>
        </div>
        <div className="flex flex-1 min-w-0 items-center justify-center px-2">
          <h1 className="font-brand text-[26px] sm:text-[35px] font-medium leading-none text-[#1D1D1F]">
            <span>i</span>Planet
          </h1>
        </div>
        <div className="flex flex-1 min-w-0 items-center justify-end gap-1.5 sm:gap-2">
          <button className="flex items-center" aria-label="Bag">
            <img src={bag} className="h-6 sm:h-7" alt="" />
            <span className="hidden sm:inline pl-1 text-xs">[ 15 ]</span>
          </button>
          <button className="flex items-center" aria-label="Account">
            <img src={userLogo} className="h-6 sm:h-7" alt="" />
          </button>
        </div>
      </header>
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export default Header;