import React from 'react';

export default function Avatar({ image, isNew, isBest }) {
  return (
    <div className='avatar'>
      <img className='photo' src={image} alt='avatar' />
      {isNew && <span className='new'>New</span>}
      {isBest && <span className='best'>Best</span>}
    </div>
  );
}
