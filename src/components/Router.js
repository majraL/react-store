import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import StorePicker from "./StorePicker";
import AdminPanel from "./AdminPanel";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={StorePicker} />
      <Route path='/store/' component={App} />
      {/* <Route path='/AdminPanel' component={AdminPanel} /> */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
