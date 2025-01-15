import React from "react";
import "./Burger.scss";

interface BurgerProps {
  onToggle: () => void;
  isOpen: boolean;
}

export const Burger: React.FC<BurgerProps> = ({ onToggle, isOpen }) => {
  return (
    <button
      className={`burger ${isOpen ? "open" : ""}`}
      aria-label="Toggle menu"
      onClick={onToggle}
    >
      <span className="burger-line"></span>
      <span className="burger-line"></span>
      <span className="burger-line"></span>
    </button>
  );
};
