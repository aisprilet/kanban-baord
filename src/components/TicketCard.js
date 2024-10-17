import React from 'react';

const TicketCard = ({ ticket, users }) => {
  const user = users.find(u => u.id === ticket.userId);
  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p>Assigned to: {user ? user.name : 'Unknown'}</p>
      <p>Priority: {['No priority', 'Low', 'Medium', 'High', 'Urgent'][ticket.priority]}</p>
      <p>Status: {ticket.status}</p>
    </div>
  );
};

export default TicketCard;
