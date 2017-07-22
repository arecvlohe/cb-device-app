import React from "react";
import { Link } from "react-router-dom";
import { Segment, List } from "semantic-ui-react";
import styled from "styled-components";

import { replaceParams } from "Helpers";
import Urls from "Urls";

function Home({ devices, className }) {
  return (
    <div className={className}>
      <Segment inverted textAlign="center">
        HOME
      </Segment>
      <List divided relaxed size="huge">
        {devices.map((d, i) => {
          return (
            <List.Item key={`${d.name}-${i}`}>
              <List.Content>
                <Link to={replaceParams(Urls.App.Device, { alias: d.alias })}>
                  <div className="device-name">
                    {d.name}
                  </div>
                </Link>
              </List.Content>
            </List.Item>
          );
        })}
      </List>
    </div>
  );
}

export default styled(Home)`
  .ui.segment {
    border-radius: 0;
  }
  .device-name {
    margin-left: 20px !important;
  }
`;
