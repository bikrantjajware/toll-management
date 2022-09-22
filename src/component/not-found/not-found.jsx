import React from 'react';

export const NotFound = ({ message }) => {
  return (
    <div className="not-found-container">
      <h1 className="title">{message}</h1>
    </div>
  );
};
