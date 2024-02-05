// BookCard.jsx
import React from 'react';
import './BookCard.css';
import ImgGroup from "./ImgGroup";

const BookCard = ({ title, description, links, images }) => {

  return (
    <div className="book-card">
      <div className='images-container'>
        <ImgGroup images={images} />
      </div>

      <div className="book-details">
        <h1 className="book-title">{title}</h1>
        {/* <p className="book-description">{description}</p> */}
        <div className='description-links-container'>
          <p className="book-description" dangerouslySetInnerHTML={{ __html: description }} />
          {links && links.length > 0 && (
            <div className="book-links">
              {/* <p className='find-it'>Find it at:</p> */}
              <ul>
                {links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <button>{link.label}</button>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
