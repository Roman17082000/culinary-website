import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Category } from "../../../../types";

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    import("../../../../data/categories.json")
      .then((data) => setCategories(data.default))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <section className="categories">
      <h2>Recipe Categories</h2>
      <div className="category-list">
        {categories.map((category) => (
          <Link
            to={`/category/${category.id}`}
            key={category.id}
            className="category-item"
          >
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
