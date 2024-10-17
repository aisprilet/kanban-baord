// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// // export default App;
// import React, { useState, useEffect } from 'react';
// import Board from './components/Board';
// import Controls from './components/Controls';
// import './App.css';

// const App = () => {
//   const [tickets, setTickets] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [grouping, setGrouping] = useState('status');
//   const [sort, setSort] = useState('priority');

//   useEffect(() => {
//     fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
//       .then(response => response.json())
//       .then(data => {
//         setTickets(data.tickets);
//         setUsers(data.users);
//       });
//   }, []);

//   useEffect(() => {
//     const savedGrouping = localStorage.getItem('grouping');
//     const savedSort = localStorage.getItem('sort');
//     if (savedGrouping) setGrouping(savedGrouping);
//     if (savedSort) setSort(savedSort);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('grouping', grouping);
//     localStorage.setItem('sort', sort);
//   }, [grouping, sort]);

//   return (
//     <div className="App">
//       <Controls setGrouping={setGrouping} setSort={setSort} />
//       <Board tickets={tickets} users={users} grouping={grouping} sort={sort} />
//     </div>
//   );
// };

// export default App;











// // src/App.js
// import React, { useEffect, useState } from 'react';
// import './App.css';

// const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

// const App = () => {
//   const [tickets, setTickets] = useState([]);
//   const [users, setUsers] = useState([]);

//   // Fetch data from the API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(API_URL);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setTickets(data.tickets); // Assuming the API response contains a "tickets" array
//         setUsers(data.users); // Assuming the API response contains a "users" array
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   // Categorize tickets based on status
//   const categorizeTickets = () => {
//     const categories = {
//       Backlog: [],
//       'To Do': [],
//       'In Progress': [],
//       Done: [],
//       Cancelled: []
//     };

//     tickets.forEach(ticket => {
//       if (categories[ticket.status]) {
//         categories[ticket.status].push(ticket);
//       }
//     });

//     return categories;
//   };

//   // Render columns for each category
//   const renderColumns = () => {
//     const categorizedTickets = categorizeTickets();
//     return Object.keys(categorizedTickets).map(category => (
//       <div className="kanban-column" key={category}>
//         <h2>{category}</h2>
//         {categorizedTickets[category].length > 0 ? (
//           categorizedTickets[category].map((ticket) => (
//             <div className="kanban-card" key={ticket.id}>
//               <h3>{ticket.title}</h3>
//               <p>Status: {ticket.status}</p>
//               <p>Priority: {getPriorityLabel(ticket.priority)}</p>
//               <p>User: {getUserName(ticket.userId)}</p>
//             </div>
//           ))
//         ) : (
//           <p>No tickets</p>
//         )}
//       </div>
//     ));
//   };

//   // Get priority label based on the priority level
//   const getPriorityLabel = (priority) => {
//     switch(priority) {
//       case 4: return 'Urgent';
//       case 3: return 'High';
//       case 2: return 'Medium';
//       case 1: return 'Low';
//       case 0: return 'No Priority';
//       default: return 'Unknown';
//     }
//   };

//   // Get user name based on userId
//   const getUserName = (userId) => {
//     const user = users.find(user => user.id === userId);
//     return user ? user.name : 'Unknown User';
//   };

//   return (
//     <div className="kanban-container">
//       <h1>Kanban Board</h1>
//       <div className="kanban-board">
//         {renderColumns()}
//       </div>
//     </div>
//   );
// };

// export default App;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css'; // Create a CSS file for styling

// const App = () => {
//   const [tickets, setTickets] = useState([]);
//   const [grouping, setGrouping] = useState('status');
//   const [sorting, setSorting] = useState('title');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
//         setTickets(response.data.tickets);
//       } catch (error) {
//         console.error('Error fetching the data', error);
//       }
//     };
//     fetchData();
//   }, []);

//   const groupTickets = () => {
//     if (grouping === 'status') {
//       return tickets.reduce((acc, ticket) => {
//         acc[ticket.status] = acc[ticket.status] || [];
//         acc[ticket.status].push(ticket);
//         return acc;
//       }, {});
//     } else if (grouping === 'user') {
//       return tickets.reduce((acc, ticket) => {
//         const user = ticket.userId; // Assuming userId is the key to group by
//         acc[user] = acc[user] || [];
//         acc[user].push(ticket);
//         return acc;
//       }, {});
//     } else if (grouping === 'priority') {
//       return tickets.reduce((acc, ticket) => {
//         const priority = ticket.priority; // Using priority for grouping
//         acc[priority] = acc[priority] || [];
//         acc[priority].push(ticket);
//         return acc;
//       }, {});
//     }
//     return {};
//   };

//   const sortTickets = (tickets) => {
//     return tickets.sort((a, b) => {
//       if (sorting === 'priority') {
//         return b.priority - a.priority; // Descending order
//       } else if (sorting === 'title') {
//         return a.title.localeCompare(b.title); // Ascending order
//       }
//       return tickets;
//     });
//   };

//   const groupedTickets = groupTickets();

//   return (
//     <div className="app">
//       <h1>Kanban Board</h1>
//       <div>
//         <select onChange={(e) => setGrouping(e.target.value)}>
//           <option value="status">Group by Status</option>
//           <option value="user">Group by User</option>
//           <option value="priority">Group by Priority</option>
//         </select>
//         <select onChange={(e) => setSorting(e.target.value)}>
//           <option value="title">Sort by Title</option>
//           <option value="priority">Sort by Priority</option>
//         </select>
//         <button onClick={() => setTickets([...tickets])}>Display</button>
//       </div>
//       <div className="kanban">
//         {Object.entries(groupedTickets).map(([key, tickets]) => (
//           <div key={key} className="column">
//             <h2>{key}</h2>
//             {sortTickets(tickets).map(ticket => (
//               <div key={ticket.id} className="card">
//                 <h3>{ticket.title}</h3>
//                 <p>Priority: {ticket.priority}</p>
//                 <p>Status: {ticket.status}</p>
//                 <p>User: {ticket.userId}</p>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css'; // Import the updated CSS

// const App = () => {
//   const [tickets, setTickets] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [grouping, setGrouping] = useState('status');
//   const [sorting, setSorting] = useState('title');
//   const [selectedTickets, setSelectedTickets] = useState([]); // State to store selected tickets

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
//         setTickets(response.data.tickets);
//         setUsers(response.data.users);
//       } catch (error) {
//         console.error('Error fetching the data', error);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleCheckboxChange = (ticketId) => {
//     // Toggle selection of the ticket
//     setSelectedTickets((prevSelected) =>
//       prevSelected.includes(ticketId)
//         ? prevSelected.filter(id => id !== ticketId) // Remove from selection
//         : [...prevSelected, ticketId] // Add to selection
//     );
//   };

//   // Create a mapping of userId to user name
//   const userMap = users.reduce((acc, user) => {
//     acc[user.id] = user.name;
//     return acc;
//   }, {});

//   const priorityMap = {
//     4: 'Urgent',
//     3: 'High',
//     2: 'Medium',
//     1: 'Low',
//     0: 'No priority',
//   };

//   const groupTickets = () => {
//     if (grouping === 'status') {
//       return tickets.reduce((acc, ticket) => {
//         acc[ticket.status] = acc[ticket.status] || [];
//         acc[ticket.status].push(ticket);
//         return acc;
//       }, {});
//     } else if (grouping === 'user') {
//       return tickets.reduce((acc, ticket) => {
//         const user = ticket.userId;
//         acc[userMap[user]] = acc[userMap[user]] || [];
//         acc[userMap[user]].push(ticket);
//         return acc;
//       }, {});
//     } else if (grouping === 'priority') {
//       return tickets.reduce((acc, ticket) => {
//         const priority = ticket.priority;
//         acc[priority] = acc[priority] || [];
//         acc[priority].push(ticket);
//         return acc;
//       }, {});
//     }
//     return {};
//   };

//   const sortTickets = (tickets) => {
//     return tickets.sort((a, b) => {
//       if (sorting === 'priority') {
//         return b.priority - a.priority;
//       } else if (sorting === 'title') {
//         return a.title.localeCompare(b.title);
//       }
//       return tickets;
//     });
//   };

//   const groupedTickets = groupTickets();

//   return (
//     <div className="app">
//       <div>
//         <select onChange={(e) => setGrouping(e.target.value)}>
//           <option value="status">Group by Status</option>
//           <option value="user">Group by User</option>
//           <option value="priority">Group by Priority</option>
//         </select>
//         <select onChange={(e) => setSorting(e.target.value)}>
//           <option value="title">Sort by Title</option>
//           <option value="priority">Sort by Priority</option>
//         </select>
//         <button onClick={() => setTickets([...tickets])}>Display</button>
//       </div>
//       <div className="kanban">
//         {Object.entries(groupedTickets).map(([key, tickets]) => (
//           <div key={key} className="column">
//             <h2>
//               {grouping === 'priority' ? priorityMap[key] : key}
//             </h2>
//             {sortTickets(tickets).map(ticket => (
//               <div key={ticket.id} className="card">
//                 <input
//                   type="checkbox" // Use checkbox for multiple selection
//                   checked={selectedTickets.includes(ticket.id)} // Check if this ticket is selected
//                   onChange={() => handleCheckboxChange(ticket.id)} // Update the selection
//                   className="custom-radio" // Custom class for styling
//                 />
//                 {/* <h3>Ticket #{ticket.id}</h3> */}
//                 <h2>{ticket.title}</h2>
//                 <p>{ticket.tag.join(', ')}</p>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import the updated CSS

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('title');
  const [selectedTickets, setSelectedTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        setTickets(response.data.tickets);
        setUsers(response.data.users);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };
    fetchData();
  }, []);

  const handleCheckboxChange = (ticketId) => {
    setSelectedTickets((prevSelected) =>
      prevSelected.includes(ticketId)
        ? prevSelected.filter(id => id !== ticketId)
        : [...prevSelected, ticketId]
    );
  };

  const userMap = users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
  }, {});

  const priorityMap = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No priority',
  };

  const groupTickets = () => {
    if (grouping === 'status') {
      return tickets.reduce((acc, ticket) => {
        acc[ticket.status] = acc[ticket.status] || [];
        acc[ticket.status].push(ticket);
        return acc;
      }, {});
    } else if (grouping === 'user') {
      return tickets.reduce((acc, ticket) => {
        const user = ticket.userId;
        acc[userMap[user]] = acc[userMap[user]] || [];
        acc[userMap[user]].push(ticket);
        return acc;
      }, {});
    } else if (grouping === 'priority') {
      return tickets.reduce((acc, ticket) => {
        const priority = ticket.priority;
        acc[priority] = acc[priority] || [];
        acc[priority].push(ticket);
        return acc;
      }, {});
    }
    return {};
  };

  const sortTickets = (tickets) => {
    return tickets.sort((a, b) => {
      if (sorting === 'priority') {
        return b.priority - a.priority;
      } else if (sorting === 'title') {
        return a.title.localeCompare(b.title);
      }
      return tickets;
    });
  };

  const groupedTickets = groupTickets();

  const handleAddTicket = () => {
    // Do nothing on click
  };

  return (
    <div className="app">
      <div className="controls">
        <select onChange={(e) => setGrouping(e.target.value)}>
          <option value="status">Group by Status</option>
          <option value="user">Group by User</option>
          <option value="priority">Group by Priority</option>
        </select>
        <select onChange={(e) => setSorting(e.target.value)}>
          <option value="title">Sort by Title</option>
          <option value="priority">Sort by Priority</option>
        </select>
        <button onClick={() => setTickets([...tickets])}>Display</button>
      </div>
      <div className="kanban">
        {Object.entries(groupedTickets).map(([key, tickets]) => (
          <div key={key} className="column">
            <h2 className="column-header">
              <span>
                {grouping === 'priority' ? priorityMap[key] : key}
                {grouping === 'status' && <i className="fas fa-clipboard-list status-icon"></i>}
              </span>
              <button className="add-button" onClick={handleAddTicket}>+</button>
            </h2>
            {sortTickets(tickets).map(ticket => (
              <div key={ticket.id} className="card">
                <div className="card-content">
                  <input
                    type="checkbox"
                    checked={selectedTickets.includes(ticket.id)}
                    onChange={() => handleCheckboxChange(ticket.id)}
                    className="custom-radio"
                  />
                  <h2 className="ticket-title">{ticket.title}</h2>
                </div>
                <p className="ticket-tags">{ticket.tag.join(', ')}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
