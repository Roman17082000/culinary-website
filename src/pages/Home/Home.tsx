import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/layout/Banner/Banner.tsx";
import "./home.scss";

type Category = {
  id: number;
  name: string;
  image: string;
};

type Recipe = {
  id: number;
  name: string;
  category: number;
  image: string;
  description: string;
};

const Home: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [popularRecipes, setPopularRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchData = () => {
      import("../../data/categories.json")
        .then((categoryData) => {
          setCategories(categoryData.default);
          return import("../../data/recipes.json");
        })
        .then((recipeData) => {
          setPopularRecipes(recipeData.default.slice(0, 4));
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      <Banner />
      <div className="home__content">
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
      </div>
    </div>
  );
};

export default Home;
