import React from "react";
import { links } from "./routes";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="page__content">
      <h1>🏠</h1>
      <Link to={links.Products}>To products</Link>
    </div>
  );
}

export default Home;