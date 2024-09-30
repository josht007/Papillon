import React, { useState } from 'react';

const MoodTracker = () => {
  const [mood, setMood] = useState('');
  const [response, setResponse] = useState('');

  const handleMoodSubmit = (event) => {
    event.preventDefault();
    const lowercaseMood = mood.toLowerCase().trim();
    
    if (lowercaseMood === '') {
      setResponse("Please enter a mood.");
    } else if (['happy', 'sad', 'angry', 'anxious', 'excited', 'calm'].includes(lowercaseMood)) {
      setResponse(getMoodResponse(lowercaseMood));
    } else {
      setResponse("I'm not familiar with that mood. Try describing how you feel with words like happy, sad, angry, anxious, excited, or calm.");
    }
  };

  const getMoodResponse = (mood) => {
    switch(mood) {
      case 'happy':
        return "That's great! Keep spreading that positivity!";
      case 'sad':
        return "I'm sorry you're feeling down. Remember, it's okay to not be okay sometimes. Consider talking to someone you trust or doing something you enjoy.";
      case 'angry':
        return "It's understandable to feel angry sometimes. Try taking some deep breaths or going for a walk to help calm down.";
      case 'anxious':
        return "Anxiety can be tough. Have you tried any relaxation techniques like deep breathing or meditation?";
      case 'excited':
        return "Wonderful! Channel that energy into something you're passionate about!";
      case 'calm':
        return "That's a great state of mind. Enjoy this peaceful moment!";
      default:
        return "Thank you for sharing how you feel.";
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>How are you feeling today?</h2>
      <form onSubmit={handleMoodSubmit}>
        <input 
          type="text" 
          value={mood} 
          onChange={(e) => setMood(e.target.value)} 
          placeholder="Enter your mood"
        />
        <button type="submit">Submit</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
};

export default MoodTracker;