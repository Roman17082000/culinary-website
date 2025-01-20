import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import RecipePage from "./pages/RecipePage/RecipePage.tsx";
import { Header } from "./components/layout/Header/Header.tsx";
import Footer from "./components/layout/Footer/Footer.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
