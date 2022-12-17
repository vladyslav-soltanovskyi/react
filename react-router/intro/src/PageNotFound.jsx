import React from "react";
import { links } from "./routes";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="page__content">
      <h1>😢</h1>
      <Link to={links.Home}>Go home</Link>
    </div>
  );
}

export default PageNotFound;