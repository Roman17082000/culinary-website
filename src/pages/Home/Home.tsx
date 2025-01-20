import React from "react";
import Banner from "../../components/layout/Banner/Banner";
import Categories from "./Sections/Categories/Categories.tsx";
import UsefulInfo from "./Sections/UsefulInfo/UsefulInfo.tsx";
import BlogSection from "./Sections/BlogSection/BlogSection.tsx";

import "./Home.scss";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home__content">
        <Categories />
        <UsefulInfo />
        <BlogSection />
      </div>
    </div>
  );
};

export default Home;
