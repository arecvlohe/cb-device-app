import React from "react";
import { Switch, Route } from "react-router-dom";

import Admin from "./Admin";
import App from "./App";

export default () =>
  <main>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/admin" component={Admin} />
    </Switch>
  </main>;
