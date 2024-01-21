import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import MyBooks from '../components/books/Books';
import AboutMe from '../components/About-Me/AboutMe'
import ContactMe from '../components/Contact-Me/ContactMe'
import CTA from '../components/CTA-Section/CTA'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <MyBooks />
      <CTA />
      <AboutMe />
      <ContactMe />
    </div>
  );
};

export default Home;