import React from "react";

export default function DeviceTypes({
  controlNames,
  deviceControls = [],
  handleChange,
  handleControlsChange,
  handleSubmit,
  isEditMode,
  name = ""
}) {
  return (
    <div>
      <div>
        {isEditMode ? "Edit" : "Add"} Device Type
      </div>
      <form onSubmit={handleSubmit}>
        <input name="name" value={name} onChange={handleChange} />
        <br />
        <div>
          {deviceControls.map((d, i) => {
            return (
              <div key={`${d}-${i}`}>
                {d.name}{" "}
                <span onClick={() => handleControlsChange(d, "remove")}>x</span>
              </div>
            );
          })}
        </div>
        <label htmlFor="addControl">Add Control</label>
        <select
          name="addControl"
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
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
