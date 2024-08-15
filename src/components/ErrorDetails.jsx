// components/ErrorDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ErrorDetails() {
  const { id } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the error details from the backend and update the state
    fetchErrorDetails();
  }, [id]);

  const fetchErrorDetails = () => {
    // Implement the logic to fetch the error details from the backend
    // and update the `error` state
  };

  if (!error) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{error.title}</h1>
      <p>{error.description}</p>
      <h2>Symptoms</h2>
      <ul>
        {error.symptoms.map((symptom, index) => (
          <li key={index}>{symptom}</li>
        ))}
      </ul>
      <h2>Possible Causes</h2>
      <ul>
        {error.possibleCauses.map((cause, index) => (
          <li key={index}>{cause}</li>
        ))}
      </ul>
      <h2>Resolution Steps</h2>
      <ol>
        {error.resolutionSteps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default ErrorDetails;