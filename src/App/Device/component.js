import React from "react";
import { componentFromProp } from "recompose";

const RenderComponent = componentFromProp("component");

export default function Device({ controls = [] }) {
  return (
    <div>
      {controls.map((c, i) => {
        switch (c.type) {
          case "button": {
            return (
              <div key={`${c.name}-${i}`}>
                {c.name}
                <RenderComponent component="button">
                  {c.currentValue}
                </RenderComponent>
              </div>
            );
          }
          case "slider": {
            return (
              <div key={`${c.name}-${i}`}>
                {c.name}
                <RenderComponent
                  name="slider"
                  value={c.currentValue}
                  component="input"
                  type="range"
                  key={`${c.name}-${i}`}
                />
              </div>
            );
          }
          case "select": {
            return (
              <div key={`${c.name}-${i}`}>
                {c.name}
                <RenderComponent component="select">
                  {c &&
                    c.options &&
                    c.options.map((o, i) => {
                      return (
                        <option key={`${o}-${i}`}>
                          {o}
                        </option>
                      );
                    })}
                </RenderComponent>
              </div>
            );
          }
        }
      })}
    </div>
  );
}
