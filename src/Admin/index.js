import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import Urls from "Urls";

export default () =>
  <div>
    <h1>Admin Home</h1>
    <Route path={Urls.Admin.Home} component={Home} />
  </div>;
