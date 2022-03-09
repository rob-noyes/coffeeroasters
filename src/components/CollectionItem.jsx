import React from 'react';

function CollectionItem({ title, text }) {
  return (
    <div className='collection-item'>
      <img src='./assets/home/desktop/image-gran-espresso.png' alt='' />
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
}

export default CollectionItem;
