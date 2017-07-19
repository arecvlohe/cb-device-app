import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home";

export default () =>
  <div>
    <Route exact path="/admin" component={Home} />
  </div>;
