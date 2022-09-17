import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Aboutus from '../Aboutus';
import Homemenu from '../Homemenu';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Aboutus />
      <Cards />
      <Homemenu />
      
      <Footer />
    </>
  );
}

export default Home;
