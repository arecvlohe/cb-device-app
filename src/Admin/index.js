import React from "react";
import { Route, Link } from "react-router-dom";

import Home from "./Home";
import Urls from "Urls";

export default () =>
  <div>
    <Link to={Urls.Admin.List}>Admin Home</Link>
    <Route path={Urls.Admin.Home} component={Home} />
  </div>;
