import React from "react";
import { componentFromProp } from "recompose";

const RenderComponent = componentFromProp("component");

export default function Device({
  controls = [],
  handleToggle,
  handleSelect,
  handleSlider
}) {
  return (
    <div>
      {controls.map((c, i) => {
        switch (c.type) {
          case "button": {
            return (
              <div key={`${c.name}-${i}`}>
                {c.name}
                <RenderComponent
                  checked={c.currentValue === "on" ? true : false}
                  component="input"
                  name={c.alias}
                  onClick={handleToggle}
                  type="radio"
                />
              </div>
            );
          }
          case "slider": {
            return (
              <div key={`${c.name}-${i}`}>
                {c.name}
                <RenderComponent
                  component="input"
                  key={`${c.name}-${i}`}
                  name={c.alias}
                  onInput={handleSlider}
                  type="range"
                  value={c.currentValue}
                />
              </div>
            );
          }
          case "select": {
            return (
              <div key={`${c.name}-${i}`}>
                {c.name}
                <RenderComponent
                  component="select"
                  name={c.alias}
                  onChange={handleSelect}
                  value={c.currentValue}
                >
                  <option value=""> -- Choose from Options -- </option>
                  {c &&
                    c.options &&
                    c.options.map((o, i) => {
                      return (
                        <option key={`${o}-${i}`} value={o}>
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
