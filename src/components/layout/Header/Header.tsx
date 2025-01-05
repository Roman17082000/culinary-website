import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";

export const Header: React.FC = () => {
  const location = useLocation();
  const headerRef = useRef<HTMLDivElement | null>(null); // Ссылка на хедер
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollY = useRef(0); // Текущее состояние прокрутки сохраняем через useRef

  useEffect(() => {
    if (location.pathname !== "/") return; // Проверяем, находимся ли на Home

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true); // Скрываем хедер при прокрутке вниз
      } else {
        setIsHidden(false); // Показываем при прокрутке вверх
      }

      lastScrollY.current = currentScrollY; // Обновляем позицию прокрутки
    };

    const headerElement = headerRef.current;

    if (headerElement) {
      window.addEventListener("scroll", handleScroll); // Вешаем обработчик прокрутки
    }

    return () => {
      if (headerElement) {
        window.removeEventListener("scroll", handleScroll); // Убираем обработчик при размонтировании
      }
    };
  }, [location.pathname]);

  return (
    <header
      ref={headerRef}
      className={`header ${isHidden && location.pathname === "/" ? "hidden" : ""}`}
    >
      <div className="logo">
        <Link to="/" aria-label="Go to Cooking World Home">
          <h1>Cooking World</h1>
        </Link>
      </div>
      <nav className="navigation" aria-label="Main navigation">
        <ul>
          <li>
            <Link
              to="/"
              aria-current={location.pathname === "/" ? "page" : undefined}
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
            >
              Recipes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
