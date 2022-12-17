import React from "react";
import { links } from "./routes";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="page__content">
      <h1>Products</h1>
      <p>We will add some products. Later... 😇</p>
      <Link to={links.Contacts}>Contacts</Link>
    </div>
  );
}

export default Products;