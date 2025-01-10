import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Recipe as RecipeType } from "../../types";
import "./recipe.scss";

const Recipe: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<RecipeType | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const recipeData = await import("../../data/recipes.json");
        const foundRecipe = recipeData.default.find(
          (r: RecipeType) => r.id === Number(id),
        );
        setRecipe(foundRecipe || null);
      } catch (error) {
        console.error("Failed to load recipe:", error);
      }
    };

    void fetchRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-page">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <p>{recipe.description}</p>
    </div>
  );
};

export default Recipe;
