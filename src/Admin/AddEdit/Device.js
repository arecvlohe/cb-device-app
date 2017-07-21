import React from "react";

export default function Device({
  deviceType = "",
  deviceTypeNames = [],
  handleChange,
  handleSubmit,
  IPAddress = "",
  isEditMode,
  name = ""
}) {
  return (
    <div>
      <h3>
        {isEditMode ? "Edit" : "Add"} Device
      </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <br />
        <label htmlFor="IPAddress">IP Address</label>
        <input
          type="text"
          name="IPAddress"
          value={IPAddress}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="deviceType">Device Type</label>
        <select value={deviceType} onChange={handleChange} name="deviceType">
          <option value=""> -- Choose a Device Type -- </option>
          {deviceTypeNames.map((d, i) => {
            return (
              <option value={d} key={`${d}-${i}`}>
                {d}
              </option>
            );
          })}
        </select>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
