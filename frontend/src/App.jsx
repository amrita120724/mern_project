
import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);

  // Access the environment variable
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (!API_BASE_URL) {
      setError("API Base URL not defined. Check your .env file.");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/users`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setUsers(result.users);
      } catch (e) {
        setError(e.message);
      }
    };

    fetchData();
  }, [API_BASE_URL]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.length > 0 && users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}


export default App
