import React from 'react';
import Avatar from './Avatar';

export default function Profile({ image, name, title, isNew, isBest }) {
  return (
    <div className='profile'>
      <Avatar image={image} isNew={isNew} isBest={isBest} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
