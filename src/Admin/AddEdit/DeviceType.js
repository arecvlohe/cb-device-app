import React from "react";

export default function DeviceTypes({
  controlNames,
  deviceControls = [],
  handleChange,
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
        <select multiple>
          <option value=""> -- Choose Controls -- </option>
          {controlNames.map((c, i) => {
            return (
              <option
                key={`${c}-${i}`}
                selected={deviceControls.find(
                  d => (d.name === c ? true : false)
                )}
              >
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
