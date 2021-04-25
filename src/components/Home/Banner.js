import React from 'react';
import "../App.css"; 

const Banner = ({ token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          Articles Book
        </h1>
        <p>Comparte lo que sientes</p>
      </div>
    </div>
  );
};

export default Banner;
