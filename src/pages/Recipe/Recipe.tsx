import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./recipe.scss";

const Recipe: React.FC = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<any>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const recipeData = await import("../../data/recipes.json");
      const foundRecipe = recipeData.default.find(
        (r: any) => r.id === Number(id),
      );
      setRecipe(foundRecipe);
    };

    fetchRecipe();
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
