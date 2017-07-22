import React from "react";
import { Input, Form, Button, Header, Segment } from "semantic-ui-react";
import styled from "styled-components";

function Device({
  className,
  deviceType = "",
  deviceTypeNames = [],
  handleChange,
  handleSubmit,
  IPAddress = "",
  isEditMode,
  name = ""
}) {
  return (
    <div className={className}>
      <Header as="h2" attached="top">
        {isEditMode ? "Edit" : "Add"} Device
      </Header>
      <Segment attached>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="IPAddress">IP Address</label>
            <input
              type="text"
              name="IPAddress"
              value={IPAddress}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="deviceType">Device Type</label>
            <select
              className="ui fluid normal dropdown"
              value={deviceType}
              onChange={handleChange}
              name="deviceType"
            >
              <option value=""> -- Choose a Device Type -- </option>
              {deviceTypeNames.map((d, i) => {
                return (
                  <option value={d} key={`${d}-${i}`}>
                    {d}
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

export default styled(Device)`
  padding: 20px;
`;
