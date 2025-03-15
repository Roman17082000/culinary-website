import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.scss";

interface DropdownProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  hover?: boolean;
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
