import React from "react";

export default function Control({
  controlNames,
  controlTypes,
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
        <label htmlFor="type">Type</label>
        <select value={type} onChange={handleChange} name="type">
          <option value=""> -- Choose a Control Type -- </option>
          {controlTypes.map((c, i) => {
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
