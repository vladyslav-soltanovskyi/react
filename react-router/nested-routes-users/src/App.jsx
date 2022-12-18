import React from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import { links } from "./routes";
import Home from "./Home";
import Users from "./Users";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="page">
          <ul className="navigation">
            <li className="navigation__item"><Link to={links.Home}>Home</Link></li>
            <li className="navigation__item"><Link to={links.Users}>Users</Link></li>
          </ul>
          <Route path={links.Home} exact>
            <Home />
          </Route>
          <Route path={links.Users}>
            <Users />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
