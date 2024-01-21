// Books.jsx
import React from 'react';
import BookCard from './BookCard';
import './Books.css';

const Books = () => {
    const booksData = [
        {
            title: 'Fundamental Beliefs of Islam',
            description: `Are you new to Islam? Are you looking to learn the fundamental beliefs a Muslim has? Like the mindset and theory behind tawakul, ihsan and sabr? Are you a visual learner?

                If you answered Yes to any of those questions, then this books is for you. It features wonderful and easy to read instructions and visuals that will simply bless you with fundamentals of Islam. A great book for new reverts and young children as well as young adults.
                
                By Salih Hakki Bak, Paperback, 320 pages`,
            links: [
                { label: 'Fajr Noor', url: 'https://fajrnoor.com/products/fundamental-beliefs-of-islam' },
            ],
            images: ['Images/FBI.png'],
        },
        {
            title: 'Essential Beliefs & Practices in Islam',
            description: `Are you new to Islam? Are you looking to learn the essentials everday things that a Muslim does. Like How to perform Salah, Wudu, How to make Duas? Are you a visual learner?

                If you answered Yes to any of those questions, then this books is for you. It features wonderful and easy to read instructions and visuals that will simply bless you basics of Islam. A great book for new reverts and young children as well as young adults.
                
                By Salih Hakki Bak, Paperback, 278 pages`,
            links: [
                { label: 'Fajr Noor', url: 'https://fajrnoor.com/products/essential-beliefs-practices-in-islam' },
            ],
            images: ['Images/EBPIS.png'],
        },
        {
            title: 'A Guide to Learn How to Read The Quran',
            description: `A Guide to Learn How to Read The Quran with Tajweed Rules by Salih Hakki Bak

                This book has been designed in order to provide easy step by step processes for beginners, intermediates and advanced learners to transition into reading the Quran
                
                The book also provides necessary knowledge to learn and recite the Qur'anic letters in different forms, such as in words and in short and long vowels, relating to the Tajweed rules of the Qur'an in the quickest and easiest way.
                
                This book includes:
                
                Easy and comprehensive units for beginners
                Colour coded Tajweed rules Unit for all:
                Beginner, Intermediate, Advanced and Fluent Reader Levels
                A comprehensive explanation and practice of various Yajweed rules
                Detailed exercises allowing students to recognise and pronounce letters, words with harakaat.
                By Salih Hakki Bak, New Impact Books, Paperback, 105 pages`,
            links: [
                { label: 'Fajr Noor', url: 'https://fajrnoor.com/products/a-guide-to-learn-how-to-read-the-quran' },
            ],
            images: [
                'Images/AGTLHTRTQ.png',
                'Images/Read&Write2.jpg',
                'Images/Read&Write3.jpg',
                'Images/Read&Write4.jpg',
                'Images/Read&Write5.jpg',
                'Images/Read&Write6.jpg',
            ],
        },

        {
            title: 'Arabic Writing and Reading Activity Book',
            description: `This book is designed in order to provide beginners the fastest and easiest way to learn, recite and write the Arabic alphabet. This workbook consists of 3 units and the final test pages for assessment.

                The learners will develop:
                
                Recognition of all Arabic Letters
                Recognition of short vowels (Fathah, Kasrah and Dhammah)
                Practice in writing both letters and words
                Recite letters and words with correct pronunciation (Makhraj)
                By Salih Hakki Bak, New Impact Books, Paperback, 88 pages`,
            links: [
                { label: 'Fajr Noor', url: 'https://fajrnoor.com/products/arabic-writing-and-reading-activity-book' },
            ],
            images: ['Images/AWAR.png'],
        },
        {
            title: 'A Guide to Learn Tajweed Rules',
            description: 'Description for Book',
            links: [],
            images: ['Images/A Guide to learn tajweed rules.jpg'],
        },
        // ... (repeat for other books)
    ];

    return (
        <div id='books' className="books-container">
            <h1 className='books-header'>My Books</h1>
            <div className='two-column'> 
                {booksData.map((book, index) => (
                    <BookCard key={index} {...book} />
                ))}
            </div>
        </div>
    );
};

export default Books;
