import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { routes } from "./routes";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="page">
          <Switch>
            {routes.map(({ Component, path }) => (
              <Route
                key={path}
                path={path}
                exact
              >
                <Component />
              </Route>
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
