import React from 'react';

const Controls = ({ setGrouping, setSort }) => {
  return (
    <div className="controls">
      <div>
        <label>Group by: </label>
        <select onChange={e => setGrouping(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div>
        <label>Sort by: </label>
        <select onChange={e => setSort(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default Controls;
