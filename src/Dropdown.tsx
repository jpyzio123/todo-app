import React, { useState } from "react";

export function DropdownList({ status, onChange }) {
  return (
    <div>
      <a> Status: </a>
      <select value={status} onChange={onChange}>
        <option value="Open">Open</option>
        <option value="In Progress">In progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
}

export default DropdownList;
