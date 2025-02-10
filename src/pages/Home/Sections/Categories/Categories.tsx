import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.scss";
import { categories } from "./categories.ts";
import Dropdown from "../../../../components/UI/Dropdown/Dropdown.tsx";

const Categories: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleCategories = isExpanded ? categories : categories.slice(0, 4);

  const toggleExpanded = () => setIsExpanded((prev) => !prev);

  return (
    <section className="categories">
      <h2>Recipe Categories</h2>
      <div className="carousel-wrapper">
        <div className="carousel" ref={carouselRef}>
          {visibleCategories.map(({ id, name, image, subcategories }) =>
            subcategories && subcategories.length > 0 ? (
              <Dropdown
                key={id}
                trigger={
                  <div key={id} className="category-item has-subcategories">
                    <img src={image} alt={name} />
                    <h3>{name}</h3>
                  </div>
                }
                content={
                  <div className="categories-dropdown">
                    {subcategories.map((sub) => (
                      <div
                        key={sub.id}
                        onClick={() => navigate(`/recipes/${id}/${sub.id}`)}
                      >
                        <img src={image} alt={name} />
                        <h3>{sub.name}</h3>
                      </div>
                    ))}
                  </div>
                }
                position="top"
                hover={true}
              />
            ) : (
              <div
                className="category-item"
                key={id}
                onClick={() => navigate(`/recipes`)}
              >
                <img src={image} alt={name} />
                <h3>{name}</h3>
              </div>
            ),
          )}
          <div className="category-item toggle-expand" onClick={toggleExpanded}>
            {isExpanded ? "Hide" : "Show More"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
