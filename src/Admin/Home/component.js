import React from "react";
import { Route, Link, Redirect } from "react-router-dom";

import Urls from "Urls";
import List from "../List";
import AddEdit from "../AddEdit";
import { replaceParams } from "Helpers";

export default function Home() {
  return (
    <div>
      <sidebar>
        <Link to={replaceParams(Urls.Admin.Add, { type: "device" })}>
          Add Device
        </Link>
        <br />
        <Link to={replaceParams(Urls.Admin.Add, { type: "device-type" })}>
          Add Device Type
        </Link>
        <br />
        <Link to={replaceParams(Urls.Admin.Add, { type: "control" })}>
          Add Control
        </Link>
      </sidebar>
      <Route path={Urls.Admin.List} component={List} />
      <Redirect to={Urls.Admin.List} exact from={Urls.Admin.Home} />
      <Route path={Urls.Admin.Edit} component={AddEdit} />
      <Route path={Urls.Admin.Add} component={AddEdit} />
    </div>
  );
}
