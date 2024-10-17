// src/KanbanCard.js
import React from 'react';

const KanbanCard = ({ ticket }) => {
  const priorityLabels = ['No Priority', 'Low', 'Medium', 'High', 'Urgent'];

  return (
    <div className="kanban-card">
      <h3>{ticket.title}</h3>
      <p>Priority: {priorityLabels[ticket.priority]}</p>
      <p>Status: {ticket.status}</p>
    </div>
  );
};

export default KanbanCard;
