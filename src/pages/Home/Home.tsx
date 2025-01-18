// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Banner from "../../components/layout/Banner/Banner";
// import "./home.scss";
// import { Category, Recipe } from "../../types";
//
// const Home: React.FC = () => {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [popularRecipes, setPopularRecipes] = useState<Recipe[]>([]);
//
//   useEffect(() => {
//     const fetchData = () => {
//       import("../../data/categories.json")
//         .then((categoryData) => {
//           setCategories(categoryData.default);
//           return import("../../data/recipes.json");
//         })
//         .then((recipeData) => {
//           setPopularRecipes(recipeData.default.slice(0, 4));
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//         });
//     };
//
//     fetchData();
//   }, []);
//
//   return (
//     <div className="home">
//       <Banner />
//       <div className="home__content">
//         <section className="categories">
//           <h2>Recipe Categories</h2>
//           <div className="category-list">
//             {categories.map((category) => (
//               <Link
//                 to={`/category/${category.id}`}
//                 key={category.id}
//                 className="category-item"
//               >
//                 <img src={category.image} alt={category.name} />
//                 <h3>{category.name}</h3>
//               </Link>
//             ))}
//           </div>
//         </section>
//
//         <section className="popular-recipes">
//           <h2>Popular Recipes</h2>
//           <div className="recipe-list">
//             {popularRecipes.map((recipe) => (
//               <Link
//                 to={`/recipe/${recipe.id}`}
//                 key={recipe.id}
//                 className="recipe-item"
//               >
//                 <img src={recipe.image} alt={recipe.name} />
//                 <h3>{recipe.name}</h3>
//               </Link>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };
//
// export default Home;

import React from "react";
import Banner from "../../components/layout/Banner/Banner";
import Categories from "../../components/layout/Sections/Categories/Categories.tsx";
import PopularRecipes from "../../components/layout/Sections/PopularRecipes/PopularRecipes.tsx";
import UsefulInfo from "../../components/layout/Sections/UsefulInfo/UsefulInfo.tsx";
import BlogSection from "../../components/layout/Sections/BlogSection/BlogSection.tsx";

import "./home.scss";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home__content">
        <Categories />
        <PopularRecipes />
        <UsefulInfo />
        <BlogSection />
      </div>
    </div>
  );
};

export default Home;
