import React from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import Compare from "./pages/Compare/Compare";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/educate">
          <Blog />
        </Route>
        <Route path="/preguntas-frecuentes">
          <FAQ />
        </Route>
        <Route path="/compara-creditos">
          <Compare />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
