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
              <div>
                {c.name}
                <RenderComponent component="button" key={`${c.name}-${i}`}>
                  {c.currentValue}
                </RenderComponent>
              </div>
            );
          }
          case "slider": {
            return (
              <div>
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
              <div>
                {c.name}
                <RenderComponent component="select" key={`${c.name}-${i}`}>
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
