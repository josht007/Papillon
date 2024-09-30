import React from 'react';
import MoodTracker from './MoodTracker'; 
import './Homepage.css'; 

const Homepage = () => {
  return (
    <div className="container">
      <h1>Welcome to Papillon</h1>
      <p>
        Papillon is a mindfulness assistant designed to help you manage stress 
        and enhance your overall well-being. Our app provides personalized 
        prompts, guided meditation exercises, and a mood tracker to support 
        your mindfulness journey.
      </p>
      <h2>How It Works</h2>
      <p>
        1. Track your mood daily.<br />
        2. Receive personalized meditation prompts based on your current emotional state.<br />
        3. Access breathing exercises to help you manage stress.<br />
        4. Reflect on your progress through guided self-reflection exercises.
      </p>
      <MoodTracker /> {}
    </div>
  );
};

export default Homepage;
