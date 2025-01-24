const Card = ({ cardColor, children }) => {
  return (
    <div className="card" style={{ backgroundColor: cardColor }}>
      {children}
    </div>
  );
};

export default Card;
