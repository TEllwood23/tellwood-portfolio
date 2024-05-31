import React from 'react';
import AboutMeCard from '../components/AboutMeCard'

const MainContent: React.FC = () => {
  return (
      <div className="relative z-20 mt-96">
        <div className="flex flex-row min-h-100 relative -2 block
            bg-white rounded-lg
            border border-black shadow-md">
          <div className="basis-1/5">
          <AboutMeCard />
          </div>
        </div>
      </div>
  );
};

export default MainContent;
