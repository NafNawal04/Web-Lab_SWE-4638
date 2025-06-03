import React from 'react';

function Trader({ title, description }) {
  return (
    <div className="choose-box">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Trader;