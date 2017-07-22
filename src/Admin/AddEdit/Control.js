import React from "react";
import { Input, Form, Button, Header, Segment } from "semantic-ui-react";
import styled from "styled-components";

function Control({
  className,
  controlNames,
  controlTypes,
  handleChange,
  handleControlsChange,
  handleSubmit,
  isEditMode,
  name = "",
  type = ""
}) {
  return (
    <div className={className}>
      <Header as="h2" attached="top">
        {isEditMode ? "Edit" : "Add"} Control
      </Header>
      <Segment attached>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label htmlFor="name">Name</label>
            <Input
              name="name"
              onChange={handleChange}
              placeholder="Control Name"
              value={name}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="type">Type</label>
            <select
              className="ui fluid normal dropdown"
              value={type}
              onChange={handleChange}
              name="type"
            >
              <option value=""> -- Choose a Control Type -- </option>
              {controlTypes.map((c, i) => {
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

export default styled(Control)`
  padding: 20px;
`;
