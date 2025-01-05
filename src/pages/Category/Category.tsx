import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./category.scss";

type Recipe = {
  id: number;
  name: string;
  category: number;
  image: string;
  description: string;
};

const Category: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = () => {
      import("../../data/recipes.json")
        .then((recipeData) => {
          const filteredRecipes = recipeData.default.filter(
            (recipe) => recipe.category === Number(id),
          );
          setRecipes(filteredRecipes);
        })
        .catch((error) => {
          console.error("Error fetching recipes:", error);
        });
    };

    fetchRecipes();
  }, [id]);

  return (
    <div className="category-page">
      <h1>Recipes in Category {id}</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div className="recipe-item" key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} />
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
