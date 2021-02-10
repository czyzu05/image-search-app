import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ImagesProvider } from "./ImagesContext";
import Home from "./views/Home";
import SearchResults from './views/SearchResults'
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <ImagesProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search-results" component={SearchResults} />
        </Switch>
      </ImagesProvider>
    </BrowserRouter>
  );
};

export default App;
