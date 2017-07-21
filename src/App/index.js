import React from "react";
import { Route, Switch } from "react-router-dom";

import Device from "./Device";
import Home from "./Home";
import Urls from "Urls";

export default () =>
  <div>
    <Switch>
      <Route path={Urls.App.Home} component={Home} />
      <Route path={Urls.App.Device} component={Device} />
    </Switch>
  </div>;
