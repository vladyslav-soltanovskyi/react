import React from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import { links } from "./routes";
import Home from "./Home";
import Products from "./Products";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="page">
          <ul className="navigation">
            <li className="navigation__item">
              <Link to={links.Home}>Home</Link>
            </li>
            <li className="navigation__item">
              <Link to={links.Products}>Products</Link>
            </li>
          </ul>
          <Route path={links.Home} exact>
            <Home />
          </Route>
          <Route path={links.Products}>
            <Products />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
