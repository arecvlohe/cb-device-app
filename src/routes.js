import React from "react";
import { Switch, Route } from "react-router-dom";

import Admin from "./Admin";
import App from "./App";
import Urls from "Urls";

export default () =>
  <main>
    <Switch>
      <Route exact path={Urls.App.Home} component={App} />
      <Route path={Urls.Admin.Home} component={Admin} />
    </Switch>
  </main>;
