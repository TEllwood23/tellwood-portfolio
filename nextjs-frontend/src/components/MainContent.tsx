'use client'

import React from 'react';
import AboutMeCard from '../components/AboutMeCard'
import Carousel from '../components/Carousel'
import ProgressSlider from '../components/ProgressSlider';
import ContactForm from '../components/ContactForm';

const MainContent: React.FC = () => {

  return (
      <div className="relative z-20 mt-96 min-h-2000">
        <div className="flex flex-row min-h-full relative -2 block
            bg-white rounded-lg
            border border-black shadow-md">
          <div className="basis-1/5">
          <AboutMeCard />
          <div className="flex flex-wrap">
            <ProgressSlider />
            <ContactForm />
          </div>


{/*Carousel intended to go here, but currently rendering on "About Page" until it is working */}

          </div>
        </div>
      </div>
  );
};

export default MainContent;
