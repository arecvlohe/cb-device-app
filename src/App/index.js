import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import Urls from "Urls";

export default () =>
  <div>
    <Route path={Urls.App.Home} component={Home} />
  </div>;
