import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../../../../types";

const PopularRecipes: React.FC = () => {
  const [popularRecipes, setPopularRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    import("../../../../data/recipes.json")
      .then((data) => setPopularRecipes(data.default.slice(0, 4)))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <section className="popular-recipes">
      <h2>Popular Recipes</h2>
      <div className="recipe-list">
        {popularRecipes.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            key={recipe.id}
            className="recipe-item"
          >
            <img src={recipe.image} alt={recipe.name} />
            <h3>{recipe.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularRecipes;
