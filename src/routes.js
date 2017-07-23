import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Admin from "./Admin";
import App from "./App";
import Urls from "Urls";

export default () =>
  <main>
    <Switch>
      <Route path={Urls.App.Home} component={App} />
      <Redirect exact from="/" to={Urls.App.Home} />
      <Route path={Urls.Admin.Home} component={Admin} />
    </Switch>
  </main>;
