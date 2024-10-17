import React from 'react';
import TicketCard from './TicketCard';

const groupTickets = (tickets, grouping) => {
  const grouped = {};
  tickets.forEach(ticket => {
    const groupKey = grouping === 'user' 
      ? ticket.userId 
      : grouping === 'priority' 
      ? ticket.priority 
      : ticket.status;
    if (!grouped[groupKey]) {
      grouped[groupKey] = [];
    }
    grouped[groupKey].push(ticket);
  });
  return grouped;
};

const sortTickets = (tickets, sort) => {
  return [...tickets].sort((a, b) => {
    if (sort === 'priority') {
      return b.priority - a.priority;
    }
    return a.title.localeCompare(b.title);
  });
};

const Board = ({ tickets, users, grouping, sort }) => {
  const groupedTickets = groupTickets(tickets, grouping);

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map(group => (
        <div key={group} className="kanban-column">
          <h2>{group}</h2>
          {sortTickets(groupedTickets[group], sort).map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} users={users} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
