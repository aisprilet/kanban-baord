// src/KanbanColumn.js
import React from 'react';
import KanbanCard from './KanbanCard';

const KanbanColumn = ({ title, tickets }) => {
  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      {tickets.map(ticket => (
        <KanbanCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default KanbanColumn;
