import React from "react";
import Banner from "../../components/layout/Banner/Banner";
import Categories from "./Sections/Categories/Categories.tsx";
import FlavorLab from "./Sections/FlavorLab/FlavorLab.tsx";
import BlogSection from "./Sections/BlogSection/BlogSection.tsx";

import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home__content">
        <Categories />
        <FlavorLab />
        <BlogSection />
      </div>
    </div>
  );
};

export default Home;
