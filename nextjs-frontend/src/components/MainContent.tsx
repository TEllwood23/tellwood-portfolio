import React from 'react';
import Container from './Container';

const MainContent: React.FC = () => {
  return (
      <div className="relative z-20 p-8 mt-96">
        <h2 className="text-3xl font-bold mb-4">Main Content</h2>
        <div className="block p-6 max-w-sm
            bg-white rounded-lg
            border border-black shadow-md">
          <div className="block p-6 max-w-sm
              bg-white rounded-lg
              border border-black shadow-md">
          </div>
        </div>
      </div>
  );
};

export default MainContent;
