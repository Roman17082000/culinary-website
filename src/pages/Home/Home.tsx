import React from "react";
import Banner from "../../components/layout/Banner/Banner";
import Categories from "./Sections/Categories/Categories.tsx";
import FlavorLab from "./Sections/FlavorLab/FlavorLab.tsx";
import BlogCard from "./Sections/BlogSection/BlogCard.tsx";

import "./Home.scss";

const Home: React.FC = () => {
  return (
    <main className="home">
      <Banner />
      <div className="home__content">
        <Categories />
        <FlavorLab />
        <BlogCard />
      </div>
    </main>
  );
};

export default Home;
