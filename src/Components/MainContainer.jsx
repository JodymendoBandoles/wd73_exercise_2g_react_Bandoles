import Card from './Card';
import './MainContainer.css';

const MainContainer = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Video Editing', 'Graphic Design'];
  const colors = ['#0000FF', '#FF0000', '#00FF00', '#FFFF00', '#00FFFF'];

  return (
    <>
       <div className="main-container">
          <h1>Main Container</h1>
          <div className="card-container">
            {skills.map((skill, index) => (
            <Card key={index} skill={skill} color={colors[index]} />
            ))}
        </div>
      </div>
    </>
   
  );
};

export default MainContainer;