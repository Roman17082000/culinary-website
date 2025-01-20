import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.scss";
import LeftArrowIcon from "../../../../assets/icons/left-arrow.svg";
import RightArrowIcon from "../../../../assets/icons/right-arrow.svg";
import { categories } from "./categories.ts";

const Categories: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleVisibleCount = () => {
    if (isExpanded) {
      setVisibleCount(4); // Возврат к изначальному количеству
    } else {
      setVisibleCount(categories.length); // Показать все категории
    }
    setIsExpanded(!isExpanded); // Переключение состояния
  };

  const scrollLeftHandler = () => {
    carouselRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRightHandler = () => {
    carouselRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  const handleCategoryClick = () => {
    navigate(`/recipes`);
  };

  return (
    <section className="categories">
      <h2>Recipe Categories</h2>
      <div className="carousel-wrapper">
        <button className="scroll-button left" onClick={scrollLeftHandler}>
          <img src={LeftArrowIcon} alt="Scroll Left" />
        </button>
        <div className="carousel" ref={carouselRef}>
          {categories.slice(0, visibleCount).map((category) => (
            <div
              key={category.id}
              className="category-item"
              onClick={() => handleCategoryClick()}
            >
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
            </div>
          ))}
          <div className="category-item show-more" onClick={toggleVisibleCount}>
            {isExpanded ? "Hide" : "Show More"}
          </div>
        </div>
        <button className="scroll-button right" onClick={scrollRightHandler}>
          <img src={RightArrowIcon} alt="Scroll Right" />
        </button>
      </div>
    </section>
  );
};

export default Categories;
