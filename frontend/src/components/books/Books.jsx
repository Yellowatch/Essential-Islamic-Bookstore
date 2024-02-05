// Books.jsx
import React from 'react';
import BookCard from './BookCard';
import './Books.css';

const Books = () => {
    const booksData = [
        {
            title: 'Fundamental Beliefs of Islam',
            description: `
                <p><strong>Fundamental Beliefs of Islam</strong> is a one-in-all Islamic book designed to facilitate the audience of all ages with an easy understanding of its content. It is structured comprehensively with an in-depth description of the pillars of faith, the basic principles of Islam, and the tenets of Islamic Ethics.</p>
                <p>To enable easy learning and understanding, this book consists of 2 parts; The first section includes in-depth description of the pillars of faith and the basic principles of Islamic beliefs. And the second part covers Islamic Ethics including good character and moral etiquettes in Islam.</p>
                <h5 class='purpose-header'>The Purpose of the Book is:</h5>
                <p>To provide the readers of all ages and of all faiths and practices, both religious and non-religious, with an insight into the six pillars of Islam extending to general and specific Islamic Ethics.</p>
                <p>By Salih Hakki Bak, 320 pages</p>
                `,
            links: [
                { label: 'Fajr Noor', url: 'https://fajrnoor.com/products/fundamental-beliefs-of-islam' },
            ],
            images: [
                '/FBI/0001.jpg',
                '/FBI/0002.jpg',
                '/FBI/0003.jpg',
                '/FBI/0004.jpg',
                '/FBI/0005.jpg',
                '/FBI/0006.jpg',
                '/FBI/0007.jpg',
                '/FBI/0008.jpg',
                '/FBI/0009.jpg',
                '/FBI/0010.jpg',
                '/FBI/0011.jpg',
                '/FBI/0012.jpg',
                '/FBI/0013.jpg',
                '/FBI/0014.jpg',
                '/FBI/0015.jpg',
                '/FBI/0016.jpg',
                '/FBI/0017.jpg',
                '/FBI/0018.jpg',
                '/FBI/0019.jpg',
                '/FBI/0020.jpg',
            ],
        },
        {
            title: 'Essential Beliefs & Practices in Islam',
            description: `
                <p class='quote'> Allah says: "Worship your Lord until certainty (death) comes to you" (Qur'an: 15:99) </p>
                <p> <strong>‘Essential Beliefs and Practices in Islam’</strong> is a one-in- all Islamic book structured comprehensively with an in-depth explanation of the pillars of Islam. it involves all basic knowledge about the five pillars of Islam. In this book, everything a Muslim need in his daily life is covered with illustrations and explanations. Every chapter begins with keywords, learning outcomes. Verses and hadiths have been provided to explain the text’s meaning and transliterations are included for those who are not well-versed in Arabic. <span class='bracket'>(Covered all that is needed in the daily life of a Muslim with illustrations and explanations.) </span> </p>
                <p> It is designed to facilitate the audience of all ages with an easy understanding of its content. </p>
                <p> The Format of this Book is designed to facilitate easy learning. It is structured into two main sections are: </p>
                <p> <strong>Section A</strong> the essential principles of Islam for all audiences. it includes all basic knowledge about the five pillars of Islam with their practical actions and their rules such as Islamic hygiene, purification, how to preform prayer, giving alms (Zakat) Fasting and their rules, sins in Islam, asking forgiveness and repentance. </p>
                <p> <strong>Section B (Supplication)</strong> which is essential supplication for the daily life of a Muslim to ask God for His help, mercy, and forgiveness included such as anxiety, difficulty, distress, depression, general health, </p>
                <h5 class='purpose-header'> The Purpose of Preparing the Book is: </h5>
                <ul>
                    <li>To provide the readers, both Muslims and Non-Muslims, with a perception to the five pillars of Islam in the religion. </li>
                    <li>To facilitate the easy understanding of the essential principles of Islam for all audiences – young, the elderly and learners </li>
                </ul>
                By Salih Hakki Bak, 278 pages
                `,
            links: [
                { label: 'Fajr Noor', url: 'https://fajrnoor.com/products/essential-beliefs-practices-in-islam' },
            ],
            images: [
                'Images/EBPIS/0001.jpg',
                'Images/EBPIS/0002.jpg',
                'Images/EBPIS/0003.jpg',
                'Images/EBPIS/0004.jpg',
                'Images/EBPIS/0005.jpg',
                'Images/EBPIS/0006.jpg',
                'Images/EBPIS/0007.jpg',
                'Images/EBPIS/0008.jpg',
                'Images/EBPIS/0009.jpg',
                'Images/EBPIS/0010.jpg',
                'Images/EBPIS/0011.jpg',
                'Images/EBPIS/0012.jpg',
                'Images/EBPIS/0013.jpg',
                'Images/EBPIS/0014.jpg',
                'Images/EBPIS/0015.jpg',
                'Images/EBPIS/0016.jpg',
                'Images/EBPIS/0017.jpg',
                'Images/EBPIS/0018.jpg',
                'Images/EBPIS/0019.jpg',
                'Images/EBPIS/0020.jpg',
                'Images/EBPIS/0021.jpg',
                'Images/EBPIS/0022.jpg',
                'Images/EBPIS/0023.jpg',
                'Images/EBPIS/0024.jpg',
                'Images/EBPIS/0025.jpg',
                'Images/EBPIS/0026.jpg',
            ],
        },
        {
            title: 'A Guide to Learn How to Read The Quran',
            description: `
                <h5 class='purpose-header'> The Aims and Purpose of This Book: </h5>
                <ul>
                    <li>This book provides easy step by step processes, for beginners, intermediate and advanced learners. </li>
                    <li>This book provides the quickest and easiest way to learn and start to read the Holy Qur’an. <span class='bracket'>( This book offers the fastest and easiest way to learn and start reading the Holy Quran.)</span> </li>
                    <li>This book allows learners to have a quicker transition into reading the Qur’an. </li>
                    <li>Each unit has an explanation in English of the topic. Examples are given in Arabic and in English. Learner without much assistance can read the Alif Baa easily. </li>
                    <li>It is fully coloured. The most important Tajweed rule have been explained using colour code and assist the learner to recognise the rule easily. </li>
                    <li>The book encourages the learner to gain more confidence and motivates him when learning the Holy Qur’an. </li>
                </ul>
                <h5 class='purpose-header'> Note: This book has two parts, which are: </h5>
                <ul>
                    <li>A Step-by-Step Guide to Learning & Reading the Holy Qurʼan (Alif Baa) and </li>
                    <li>Essential Five Prayer Duas & Short Surahs Section up to Surah Ad-Dhuha with English transliteration and their meanings. </li>
                </ul>
                By Salih Hakki Bak, 105 pages`,
            links: [
                { label: 'Fajr Noor', url: 'https://fajrnoor.com/products/a-guide-to-learn-how-to-read-the-quran' },
            ],
            images: [
                'Images/AGTLHTRTQ/0001.jpg',
                'Images/AGTLHTRTQ/0002.jpg',
                'Images/AGTLHTRTQ/0003.jpg',
                'Images/AGTLHTRTQ/0004.jpg',
                'Images/AGTLHTRTQ/0005.jpg',
                'Images/AGTLHTRTQ/0006.jpg',
                'Images/AGTLHTRTQ/0007.jpg',
                'Images/AGTLHTRTQ/0008.jpg',
                'Images/AGTLHTRTQ/0009.jpg',
                'Images/AGTLHTRTQ/0010.jpg',
                'Images/AGTLHTRTQ/0011.jpg',
                'Images/AGTLHTRTQ/0012.jpg',
                'Images/AGTLHTRTQ/0013.jpg',
            ],
        },

        {
            title: 'Arabic Writing and Reading Activity Book',
            description: `
                <h5 class='purpose-header'> The Learner Will Develop: </h5>
                <p> Arabic Writing and Reading Activity Book' has been prepared to ensure that beginners are <strong>equipped with the sufficient knowledge and skills</strong> to learn the easiest way to write, learn, and recite the Arabic letters and short vowels in all forms correctly </p>
                <h5 class='purpose-header'> After Using and Completing Arabic Writing and Reading Activity Book: </h5>
                <ul>
                    <li>Learners will be equipped with the adequate knowledge and skill to write the Arabic alphabet and words. </li>
                    <li>Learner will learn and have a deeper understanding of the short vowels fathah, kasrah and dammah which will allow learners to write and read the Arabic words in an appropriate manner. </li>
                </ul>
                By Salih Hakki Bak, 88 pages`,
            links: [
                { label: 'Fajr Noor', url: 'https://fajrnoor.com/products/arabic-writing-and-reading-activity-book' },
            ],
            images: [
                'Images/AWAR/0001.jpg',
                'Images/AWAR/0002.jpg',
                'Images/AWAR/0003.jpg',
                'Images/AWAR/0004.jpg',
                'Images/AWAR/0005.jpg',
                'Images/AWAR/0006.jpg',
                'Images/AWAR/0007.jpg',
                'Images/AWAR/0008.jpg',
                'Images/AWAR/0009.jpg',
                'Images/AWAR/0010.jpg',
            ],
        },
        {
            title: 'A Guide to Learn Tajweed Rules',
            description: `
            <p>This book was designed help learners to apply Tajweed rules for reciting the Qur’an correctly with proper pronunciation and rhythm with the desired tone, melody, and emotion.</p>
            <h5 class='purpose-header'> This Tajweed Book Includes: </h5>
            <p> After using and implementing this Tajweed book, the learners should be able to: </p>
            <ul>
                <li>Recite the Qur'an with correct pronunciation, </li>
                <li>Follow the rules of Tajweed and be able to explain the rules of Tajweed. </li>
            </ul>
            <h5 class='purpose-header'>This Book Includes: </h5>
            <ul>
                <li>Easy and comprehensive units for Beginners, Intermediate and Advance Level learners. </li>
                <li>The most important Tajweed rules have been explained using colour codes and assists the learner to recognise the rule easily. </li>
                <li>The book encourages the learner to gain more confidence and motivates him when learning the Holy Qur'an. </li>
                <li>Giving examples allows learners to recognise and learn the rules of Tajweed easily. </li>
            </ul>
            `,
            links: [],
            images: [
                'Images/AGTLTR/0001.jpg',
                'Images/AGTLTR/0002.jpg',
                'Images/AGTLTR/0003.jpg',
                'Images/AGTLTR/0004.jpg',
                'Images/AGTLTR/0005.jpg',
                'Images/AGTLTR/0006.jpg',
                'Images/AGTLTR/0007.jpg',
                'Images/AGTLTR/0008.jpg',
                'Images/AGTLTR/0009.jpg',
            ],
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
