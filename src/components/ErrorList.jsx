// components/ErrorList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ErrorList() {
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    // Fetch errors from the backend and update the state
    fetchErrors();
  }, []);

  const fetchErrors = () => {
    // Implement the logic to fetch errors from the backend
    // and update the `errors` state
  };

  return (
    <div>
      <h1>Error List</h1>
      <ul>
        {errors.map((error) => (
          <li key={error.id}>
            <Link to={`/error/${error.id}`}>{error.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ErrorList;