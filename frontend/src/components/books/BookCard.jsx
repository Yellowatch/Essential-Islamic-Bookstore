// BookCard.jsx
import React from 'react';
import './BookCard.css';
import ImgGroup from "./ImgGroup";
import { useTranslation } from 'react-i18next';

const BookCard = ({ title, title_tr, description, description_tr, links, images }) => {

  const { i18n, t } = useTranslation();

  return (
    <div className="book-card">
      <div className='images-container'>
        <ImgGroup images={images} />
      </div>

      <div className="book-details">
        <h1 className="book-title">{i18n.language == 'tr' ? (title_tr) : (title)}</h1>
        <div className='description-links-container'>
          <div className='tabs'></div>
          {i18n.language == 'tr' ? (
            <p className="book-description" dangerouslySetInnerHTML={{ __html: description_tr }} />
          ) : (
            <p className="book-description" dangerouslySetInnerHTML={{ __html: description }} />
          )}

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
