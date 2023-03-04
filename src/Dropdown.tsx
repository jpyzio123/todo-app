import React, { useState } from 'react';

export function DropdownList() {
  const [selectedStatus, setSelectedStatus] = useState('Open');

  return (
    <div>
      <a> Status: </a>
      <select
        value={selectedStatus}
        onChange={(event) => setSelectedStatus(event.target.value)}
      >
        <option value="Status A">do roboty</option>
        <option value="Status B">robi sie</option>
        <option value="Status C">zrobione</option>
      </select>
    </div>
  );
}

export default DropdownList;
