import React from "react";
import { Route, Link, Redirect } from "react-router-dom";

import Urls from "Urls";
import Devices from "../Devices";
import DeviceTypes from "../DeviceTypes";
import Controls from "../Controls";

export default function Home() {
  return (
    <div>
      <sidebar>
        <Link to={Urls.Admin.Devices}>Add Device</Link>
        <br />
        <Link to={Urls.Admin.DeviceTypes}>Add Device Type</Link>
        <br />
        <Link to={Urls.Admin.Controls}>Add Control</Link>
      </sidebar>
      <Route path={Urls.Admin.Devices} component={Devices} />
      <Route path={Urls.Admin.DeviceTypes} component={DeviceTypes} />
      <Route path={Urls.Admin.Controls} component={Controls} />
    </div>
  );
}
