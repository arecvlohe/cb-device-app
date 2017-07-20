import React from "react";

export default function Device({
  handleChange,
  handleSubmit,
  name = "",
  isEditMode
}) {
  return (
    <div>
      <h3>Add/Edit Device</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
