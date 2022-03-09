import React from 'react';

function CollectionItem({ title, text, img }) {
  return (
    <div className='collection-item'>
      <img src={img} alt='' />
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default CollectionItem;
