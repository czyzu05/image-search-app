import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ImagesProvider } from "./ImagesContext";
import Home from "./views/Home";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <ImagesProvider>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </ImagesProvider>
    </BrowserRouter>
  );
};

export default App;
