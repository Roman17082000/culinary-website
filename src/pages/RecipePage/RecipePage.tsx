import React from "react";
import { useParams } from "react-router-dom";
import "./RecipePage.scss";

const recipes = [
  {
    id: 1,
    name: "Pancakes",
    category: 1,
    image: "/images/pancakes.jpg",
    description: "Delicious breakfast pancakes.",
  },
  {
    id: 2,
    name: "Caesar Salad",
    category: 2,
    image: "/images/caesar-salad.jpg",
    description: "Classic Caesar salad for lunch.",
  },
  {
    id: 3,
    name: "Steak Dinner",
    category: 3,
    image: "/images/steak.jpg",
    description: "Juicy steak for dinner.",
  },
];

const RecipePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const categoryRecipes = recipes.filter(
    (recipe) => recipe.category === Number(id),
  );

  return (
    <div className="category-page">
      <h2>Recipes in Category {id}vc</h2>
      <div className="recipe-list">
        {categoryRecipes.map((recipe) => (
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

export default RecipePage;
