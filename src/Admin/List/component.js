import React from "react";
import { Link } from "react-router-dom";

import Urls from "Urls";
import { replaceParams } from "../helpers";

export default function List({ devices, deviceTypes, controls, handleDelete }) {
  return (
    <div>
      <div>
        <h3>Devices</h3>
        {devices.map((v, i) => {
          return (
            <div key={`device-${i}`}>
              <Link
                to={replaceParams(Urls.Admin.Edit, {
                  alias: v.alias,
                  type: "device"
                })}
              >
                {v.name}
              </Link>{" "}
              <span onClick={() => handleDelete(v, "device")}>x</span>
            </div>
          );
        })}
      </div>
      <div>
        <h3>Device Types</h3>
        {deviceTypes.map((v, i) => {
          return (
            <div key={`deviceTypes-${i}`}>
              <Link
                to={replaceParams(Urls.Admin.Edit, {
                  alias: v.alias,
                  type: "device-type"
                })}
              >
                {v.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div>
        <h3>Controls</h3>
        {controls.map((v, i) => {
          return (
            <div key={`controls-${i}`}>
              <Link
                to={replaceParams(Urls.Admin.Edit, {
                  alias: v.alias,
                  type: "control"
                })}
              >
                {v.name}
              </Link>{" "}
              <span onClick={() => handleDelete(v, "control")}>x</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
