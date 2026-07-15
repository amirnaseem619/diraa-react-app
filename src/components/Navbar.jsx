import { useState } from "react";
import { Link } from "react-router-dom";
import { useModal } from "../context/ModalContext.jsx";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openModal } = useModal();

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  };

  const openMobile = () => {
    setMobileOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <nav className="site-nav">
        <Link to="/">
          <img id="logo" src="/images/images/logo.svg" alt="Diraa" />
        </Link>

        <div className="lang-startBtn">
          <img id="lang" src="/images/images/language.svg" alt="" />
          <span>عربي</span>
          <button id="navBtn" onClick={openModal}>
            Get Started
          </button>
        </div>

        <i id="menu" className="fa-solid fa-bars" onClick={openMobile}></i>
      </nav>

      <div className={`mobile-menu${mobileOpen ? " active" : ""}`} id="mobileMenu">
        <div className="mobile-menu-top">
          <img id="mobileLogo" src="/images/images/logo.svg" alt="" />
          <i id="closeMenu" className="fa-solid fa-xmark" onClick={closeMobile}></i>
        </div>

        <ul className="mobile-menu-links">
          {navLinks.map((link) => (
            <li key={link.label} className={link.active ? "active" : ""}>
              <a href={link.href} onClick={closeMobile}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-bottom">
          <div className="mobile-lang">
            <img src="/images/images/language.svg" alt="" />
            <span>عربي</span>
          </div>
          <button
            id="mobileNavBtn"
            onClick={() => {
              closeMobile();
              openModal();
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}
