import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import Show from "./pages/show";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/show/:id" component={Show} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
