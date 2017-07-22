import React from "react";
import {
  Input,
  Form,
  Button,
  Header,
  Segment,
  List,
  Icon
} from "semantic-ui-react";
import styled from "styled-components";

function DeviceType({
  className,
  controlNames,
  deviceControls = [],
  handleChange,
  handleControlsChange,
  handleSubmit,
  isEditMode,
  name = ""
}) {
  return (
    <div className={className}>
      <Header as="h2" attached="top">
        {isEditMode ? "Edit" : "Add"} Device Type
      </Header>
      <Segment attached>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label htmlFor="name">Name</label>
            <Input
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Device Type Name"
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="controls">Current Controls</label>
            <List horizontal relaxed>
              {deviceControls.map((d, i) => {
                return (
                  <List.Item key={`${d}-${i}`}>
                    {d.name}{" "}
                    <span
                      className="delete"
                      onClick={() => handleControlsChange(d, "remove")}
                    >
                      <Icon name="trash" color="grey" />
                    </span>
                  </List.Item>
                );
              })}
            </List>
          </Form.Field>
          <Form.Field>
            <label htmlFor="addControl">Add Control</label>
            <select
              name="addControl"
              className="ui fluid normal dropdown"
              onChange={e => handleControlsChange(e, "add")}
            >
              {controlNames.map((c, i) => {
                if (deviceControls.find(d => c === d.name) ? true : false) {
                  return;
                }
                return (
                  <option value={c} key={`${c}-${i}`}>
                    {c}
                  </option>
                );
              })}
            </select>
          </Form.Field>
          <Button type="submit">Save</Button>
        </Form>
      </Segment>
    </div>
  );
}

export default styled(DeviceType)`
  padding: 20px;
  .delete:hover {
    cursor: pointer;
  }
`;
