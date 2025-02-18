import React from "react";
import classNames from "classnames";
import "./Button.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "success"; // Цвета кнопки
  size?: "small" | "medium" | "large"; // Размеры кнопки
  shape?: "rounded" | "square" | "pill"; // Форма кнопки
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  shape = "rounded",
  disabled = false,
}) => {
  return (
    <button
      className={classNames("custom-button", variant, size, shape, {
        disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
