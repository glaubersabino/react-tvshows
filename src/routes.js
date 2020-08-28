import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import Show from "./pages/show";
import Episodes from "./pages/episodes";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/show/:id" component={Show} />
      <Route path="/episodes/:id" component={Episodes} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
