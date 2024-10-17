// src/KanbanBoard.js
import React, { useEffect, useState } from 'react';
import KanbanColumn from './KanbanColumn';
import './App.css'; // For styling

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [orderBy, setOrderBy] = useState('priority');

  // Fetch data from the API
  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => setTickets(data.tickets))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Group tickets based on current selection
  const groupedTickets = () => {
    const group = tickets.reduce((acc, ticket) => {
      const key = ticket[groupBy];
      if (!acc[key]) acc[key] = [];
      acc[key].push(ticket);
      return acc;
    }, {});

    // Sort each group based on the orderBy selection
    Object.keys(group).forEach(key => {
      group[key].sort((a, b) => orderBy === 'priority' ? b.priority - a.priority : a.title.localeCompare(b.title));
    });

    return group;
  };

  return (
    <div className="kanban-board">
      <div className="controls">
        <label>Grouping:</label>
        <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
          <option value="status">Status</option>
          <option value="userId">User</option>
          <option value="priority">Priority</option>
        </select>

        <label>Ordering:</label>
        <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>

      <div className="kanban-columns">
        {Object.entries(groupedTickets()).map(([key, tickets]) => (
          <KanbanColumn key={key} title={key} tickets={tickets} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
