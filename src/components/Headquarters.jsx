import React from 'react';

export const Headquarters = ({ src, country, address, city, area, number }) => {
  return (
    <div className='country'>
      <img src={src} alt='' />
      <h3>{country}</h3>
      <ul>
        <li>
          <p>{address}</p>
        </li>
        <li>
          <p>{city}</p>
        </li>
        <li>
          <p>{area}</p>
        </li>
        <li>
          <p>{number}</p>
        </li>
      </ul>
    </div>
  );
};
