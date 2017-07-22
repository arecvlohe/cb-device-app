import React from "react";
import { componentFromProp } from "recompose";
import { Segment, List } from "semantic-ui-react";
import styled from "styled-components";
import Toggle from "react-toggle";

const RenderComponent = componentFromProp("component");

function Device({
  className,
  controls = [],
  handleSelect,
  handleSlider,
  handleToggle
}) {
  return (
    <div className={className}>
      <Segment inverted textAlign="center">
        CONTROLS
      </Segment>
      <List divided relaxed size="huge">
        {controls.map((c, i) => {
          switch (c.type) {
            case "button": {
              return (
                <List.Item key={`${c.name}-${i}`}>
                  <div className="control-container">
                    <div>
                      {c.name.toUpperCase()}
                    </div>
                    <RenderComponent
                      checked={c.currentValue === "on" ? true : false}
                      component={Toggle}
                      icons={false}
                      name={c.alias}
                      onChange={handleToggle}
                    />
                  </div>
                </List.Item>
              );
            }
            case "slider": {
              return (
                <List.Item key={`${c.name}-${i}`}>
                  <div className="control-container">
                    <div>
                      {c.name.toUpperCase()}
                    </div>
                    <RenderComponent
                      component="input"
                      key={`${c.name}-${i}`}
                      name={c.alias}
                      onInput={handleSlider}
                      type="range"
                      value={c.currentValue}
                    />
                  </div>
                </List.Item>
              );
            }
            case "select": {
              return (
                <List.Item key={`${c.name}-${i}`}>
                  <div className="control-container">
                    <div>
                      {c.name.toUpperCase()}
                    </div>
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
                </List.Item>
              );
            }
          }
        })}
      </List>
    </div>
  );
}

export default styled(Device)`
  .ui.segment {
    border-radius: 0;
  }
  .control-container {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
`;
