import React from 'react';

function BenefitItem({ img, title, text }) {
  return (
    <div className='benefit-item'>
      <img src={img} alt='' />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default BenefitItem;
