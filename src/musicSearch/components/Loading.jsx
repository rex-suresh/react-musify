import React from 'react';
import loading from '../../loading.svg';

export const Loading = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    }}
  >
    <img src={loading} alt='Loading' />
  </div>
);
