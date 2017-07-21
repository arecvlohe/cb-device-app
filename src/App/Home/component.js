import React from "react";
import { Link } from "react-router-dom";

import { replaceParams } from "Helpers";
import Urls from "Urls";

export default function Home({ devices }) {
  return (
    <div>
      {devices.map((d, i) => {
        return (
          <div key={`${d.name}-${i}`}>
            <Link to={replaceParams(Urls.App.Device, { alias: d.alias })}>
              {d.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
