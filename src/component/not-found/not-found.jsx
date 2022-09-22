import React from 'react';
import './not-found.css';
import '../../assets/images/error-404.jpg';

export const NotFound = ({ message }) => {
  return (
    <div className="not-found-container">
      <h1 className="title">{message}</h1>
    </div>
  );
};
