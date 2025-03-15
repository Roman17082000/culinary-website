import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Burger } from "../../UI/Burger/Burger.tsx";
import "./Header.scss";

export const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (location.pathname === "/" && !isMenuOpen) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, location.pathname, isMenuOpen]);

  return (
    <header
      className={`header ${!isVisible && location.pathname === "/" ? "hidden" : ""}`}
    >
      <div className="header__logo">
        <Link to="/" aria-label="Go to Cooking World Home">
          Cooking World
        </Link>
      </div>
      <nav className={`header__navigation ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link
              to="/"
              aria-current={location.pathname === "/" ? "page" : undefined}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/recipes"
              aria-current={
                location.pathname.includes("/category") ? "page" : undefined
              }
              onClick={closeMenu}
            >
              Recipes
            </Link>
          </li>
        </ul>
      </nav>
      <Burger onToggle={toggleMenu} isOpen={isMenuOpen} />
    </header>
  );
};
