const Card = ({ skill, color }) => {
    const cardStyle = {
      backgroundColor: color,
    };


  return (

    <>
        <div className="card" style={cardStyle}>
            <h3>{skill}</h3>
        </div>
    </>
    
  );
};

export default Card;