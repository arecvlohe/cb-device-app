import React from "react";

export default function List({ devices, deviceTypes, controls }) {
  return (
    <div>
      <div>
        <h3>Devices</h3>
        {devices.map(v => {
          return (
            <div>
              {v.name}
            </div>
          );
        })}
      </div>
      <div>
        <h3>Device Types</h3>
        {deviceTypes.map(v => {
          return (
            <div>
              {v.name}
            </div>
          );
        })}
      </div>
      <div>
        <h3>Controls</h3>
        {controls.map(v => {
          return (
            <div>
              {v.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
