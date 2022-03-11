import React from 'react';

export const CoffeeDetailItem = ({ coffeeDetails, coffeeValue }) => {
  return (
    <div onClick={() => coffeeValue(coffeeDetails.title)}>
      <h4>{coffeeDetails.title}</h4>
      <p>{coffeeDetails.desc}</p>
    </div>
  );
};
