import React from 'react';

function Industry({ title, description }) {
  return (
    <div className="industry-item">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Industry;