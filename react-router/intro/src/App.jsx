import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { routes } from "./routes";

class App extends React.Component {
  render() {
    return (
      <div class="page">
        <BrowserRouter>
          <Routes>
            {routes.map(({ Component, path }) => (
              <Route
                key={path}
                path={path}
                element={(<Component />)}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
