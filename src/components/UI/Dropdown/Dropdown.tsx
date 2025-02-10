import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.scss";

interface DropdownProps {
  trigger: React.ReactNode; // Элемент, на который наводят мышь (или кликают)
  content: React.ReactNode; // Контент для отображения внутри дропдауна
  position?: "top" | "bottom" | "left" | "right"; // Позиция дропдауна
  hover?: boolean; // Показывать при наведении или при клике
}

const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  content,
  position = "bottom",
  hover = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => hover && setIsOpen(true);
  const handleMouseLeave = () => hover && setIsOpen(false);

  const toggleDropdown = () => !hover && setIsOpen((prev) => !prev);

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (!hover) {
      document.addEventListener("click", closeDropdown);
    }
    return () => {
      if (!hover) {
        document.removeEventListener("click", closeDropdown);
      }
    };
  }, [hover]);

  return (
    <div
      className="dropdown"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={toggleDropdown}
    >
      {trigger}
      {isOpen && <div className={position}>{content}</div>}
    </div>
  );
};
export default Dropdown;
