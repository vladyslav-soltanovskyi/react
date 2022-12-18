import React from "react";
import { links } from "./routes";
import { Link, Switch, Route } from "react-router-dom";
import User from "./User";

const Products = () => {
  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/users/github">Github</Link>
        </li>
        <li className="navigation__item">
          <Link to="/users/facebook">Facebook</Link>
        </li>
      </ul>

      <Switch>
          <Route path={links.Users} exact>
            <span>Select a product please</span>
          </Route>
          <Route path={links.User} component={User} />
      </Switch>
    </div>
  );
}

export default Products;