import React from "react";

export default function Control({
  controlNames,
  handleChange,
  handleSubmit,
  isEditMode,
  name = "",
  type = ""
}) {
  return (
    <div>
      <div>
        {isEditMode ? "Edit" : "Add"} Control
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input name="name" value={name} onChange={handleChange} />
        <br />
        <label htmlFor="type">Control Type</label>
        <select value={type} onChange={handleChange} name="type">
          {controlNames.map((c, i) => {
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
