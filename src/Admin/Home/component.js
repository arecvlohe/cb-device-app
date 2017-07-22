import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import { Segment, Menu, Icon } from "semantic-ui-react";

import Urls from "Urls";
import List from "../List";
import AddEdit from "../AddEdit";
import { replaceParams } from "Helpers";

function Home({ className }) {
  return (
    <div className={className}>
      <Segment as={Menu} inverted vertical>
        <Link to={Urls.Admin.List}>
          <Menu.Item>
            Home
            <Icon name="home" />
          </Menu.Item>
        </Link>
        <Link to={replaceParams(Urls.Admin.Add, { type: "device" })}>
          <Menu.Item>
            Add Device
            <Icon name="tv" />
          </Menu.Item>
        </Link>
        <Link to={replaceParams(Urls.Admin.Add, { type: "device-type" })}>
          <Menu.Item>
            Add Device Type
            <Icon name="setting" />
          </Menu.Item>
        </Link>
        <Link to={replaceParams(Urls.Admin.Add, { type: "control" })}>
          <Menu.Item>
            Add Control
            <Icon name="game" />
          </Menu.Item>
        </Link>
      </Segment>
      <div className="view-container">
        <Route path={Urls.Admin.List} component={List} />
        <Redirect to={Urls.Admin.List} exact from={Urls.Admin.Home} />
        <Route path={Urls.Admin.Edit} component={AddEdit} />
        <Route path={Urls.Admin.Add} component={AddEdit} />
      </div>
    </div>
  );
}

export default styled(Home)`
  display: flex;
  height: 100vh;
  .ui.segment {
    border-radius: 0;
  }
  .view-container {
    flex: 1;
  }
`;
