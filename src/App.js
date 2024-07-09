import React from 'react';
import { Element } from 'react-scroll';
import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';
import Manfaat from './Manfaat';
import AboutUS from './AboutUS';
import ImageProcessing from './ImageProcessing';
import Team from './Team';
import Data from './Data';
import DosenPengampu from './DosenPengampu';

function App() {
  return (
    <div className='App'>
      <Header />
      <Element name="home">
        <HeroSection />
      </Element>
      <Element name="manfaat">
        <Manfaat />
      </Element>
      <Element name="aboutus">
        <AboutUS />
      </Element>
      <Element name="imageprocessing">
        <ImageProcessing />
      </Element>

      <Element name="team">
        <Team />
      </Element>
      <Element name="dosenpengampu">
        <DosenPengampu />
      </Element>
    </div>
  );
}

export default App;
