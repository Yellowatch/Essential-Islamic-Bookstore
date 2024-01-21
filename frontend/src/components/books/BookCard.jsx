// BookCard.jsx
import React from 'react';
import './BookCard.css';  // Import your custom CSS file for BookCard
import Carousel from "./Carousel";

const BookCard = ({ title, description, links, images }) => {

  return (
    <div className="book-card">
      {/* <img className="book-image" src={imageSrc} alt={title} /> */}
      <Carousel images={images} />

      <div className="book-details">
        <h1 className="book-title">{title}</h1>
        <p className="book-description">{description}</p>
        {links && links.length > 0 && (
          <div className="book-links">
            <p>Find it at:</p>
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCard;
