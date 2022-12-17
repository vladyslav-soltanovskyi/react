import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { BrowserRouter } from 'react-router-dom';

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
