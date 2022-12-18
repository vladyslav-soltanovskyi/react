import React from "react";
import { links } from "./routes";
import { Link, Switch, Route } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/products/book">Book</Link>
        </li>
        <li className="navigation__item">
          <Link to="/products/ball">Ball</Link>
        </li>
      </ul>

      <Switch>
          <Route path={links.Products} exact>
            <span>Select a product please</span>
          </Route>
          <Route path={links.Product} component={Product} />
      </Switch>
    </div>
  );
}

export default Products;