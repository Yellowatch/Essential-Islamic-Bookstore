import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import MyBooks from '../components/books/Books';
import AboutMe from '../components/About-Me/AboutMe'
import ContactMe from '../components/Contact-Me/ContactMe'
import CTA from '../components/CTA-Section/CTA'
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <MyBooks />
      <CTA />
      <AboutMe />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Home;