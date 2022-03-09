import React from 'react';

export const PlanItem = ({ number, title, text }) => {
  return (
    <div className='planItem'>
      <h3>{number}</h3>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};
