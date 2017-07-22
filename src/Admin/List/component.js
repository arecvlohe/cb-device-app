import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Icon, List as SList } from "semantic-ui-react";
import styled from "styled-components";

import Urls from "Urls";
import { replaceParams } from "Helpers";

function List({ devices, deviceTypes, controls, handleDelete, className }) {
  return (
    <div className={className}>
      <div className="segments">
        <Header as="h2" attached="top">
          <Icon name="tv" /> Devices
        </Header>
        <Segment attached>
          <SList divided relaxed>
            {devices.map((v, i) => {
              return (
                <SList.Item key={`device-${i}`}>
                  <Link
                    to={replaceParams(Urls.Admin.Edit, {
                      alias: v.alias,
                      type: "device"
                    })}
                  >
                    {v.name}
                  </Link>{" "}
                  <span
                    className="delete"
                    onClick={() => handleDelete(v, "device")}
                  >
                    <Icon name="trash" color="grey" />
                  </span>
                </SList.Item>
              );
            })}
          </SList>
        </Segment>
      </div>
      <div className="segments">
        <Header as="h2" attached="top">
          <Icon name="setting" /> Device Types
        </Header>
        <Segment attached>
          <SList divided relaxed>
            {deviceTypes.map((v, i) => {
              return (
                <SList.Item key={`deviceTypes-${i}`}>
                  <Link
                    to={replaceParams(Urls.Admin.Edit, {
                      alias: v.alias,
                      type: "device-type"
                    })}
                  >
                    {v.name}
                  </Link>{" "}
                  <span
                    className="delete"
                    onClick={() => handleDelete(v, "device-type")}
                  >
                    <Icon name="trash" color="grey" />
                  </span>
                </SList.Item>
              );
            })}
          </SList>
        </Segment>
      </div>
      <div className="segments">
        <Header as="h2" attached="top">
          <Icon name="game" /> Controls
        </Header>
        <Segment attached>
          <SList divided relaxed>
            {controls.map((v, i) => {
              return (
                <SList.Item key={`controls-${i}`}>
                  <Link
                    to={replaceParams(Urls.Admin.Edit, {
                      alias: v.alias,
                      type: "control"
                    })}
                  >
                    {v.name}
                  </Link>{" "}
                  <span
                    className="delete"
                    onClick={() => handleDelete(v, "control")}
                  >
                    <Icon name="trash" color="grey" />
                  </span>
                </SList.Item>
              );
            })}
          </SList>
        </Segment>
      </div>
    </div>
  );
}

export default styled(List)`
  .segments {
    padding: 20px;
  }
  .delete {
    &:hover {
      cursor: pointer;
    }
  }
`;
