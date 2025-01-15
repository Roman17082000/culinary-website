import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Burger } from "../../UI/Burger/Burger.tsx";
import "./Header.scss";

export const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
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
              to="/category/1"
              aria-current={
                location.pathname.includes("/category") ? "page" : undefined
              }
              onClick={closeMenu}
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              to="/recipe/1"
              aria-current={
                location.pathname.includes("/recipe") ? "page" : undefined
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
