import React, { useState } from 'react';
import './TherapistFinder.css';

const mockTherapists = [
  { id: 1, name: "Dr. John Doe", specialty: "Cognitive Behavioral Therapy", distance: "0.5 miles" },
  { id: 2, name: "Dr. Jane Smith", specialty: "Family Therapy", distance: "1.2 miles" },
  { id: 3, name: "Dr. Mike Johnson", specialty: "Trauma Therapy", distance: "2.0 miles" },
];

const TherapistFinder = () => {
  const [location, setLocation] = useState('');
  const [therapists, setTherapists] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real app, you would make an API call here
    // For now, we'll use our mock data
    setTherapists(mockTherapists);
  };

  return (
    <div className="therapist-finder">
      <h1>Find a Therapist Near You</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          placeholder="Enter your location"
          required
        />
        <button type="submit">Find Therapists</button>
      </form>
      {therapists.length > 0 && (
        <div className="therapist-list">
          <h2>Therapists near {location}</h2>
          {therapists.map((therapist) => (
            <div key={therapist.id} className="therapist-card">
              <h3>{therapist.name}</h3>
              <p>Specialty: {therapist.specialty}</p>
              <p>Distance: {therapist.distance}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TherapistFinder;