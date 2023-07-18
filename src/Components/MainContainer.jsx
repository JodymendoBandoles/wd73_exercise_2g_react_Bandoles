import React from 'react';
import Card from './Card';

const MainContainer = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Video Editing', 'Graphic Design'];

  return (
    <div className="main-container">
      <h1>Main Container</h1>
      <div className="card-container">
        {skills.map((skill, index) => (
          <Card key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default MainContainer;