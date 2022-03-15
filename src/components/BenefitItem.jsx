import React from 'react';

function BenefitItem({ img, title, text }) {
  return (
    <div className='benefit-item'>
      <img src={img} alt='' />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default BenefitItem;
