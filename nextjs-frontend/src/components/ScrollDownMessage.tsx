import React from 'react';

const ScrollDownMessage: React.FC = () => {
  return (
    <div className= "flex row space-x-10">
      <div className="font-outline-1 text-white text-xl mt-4 animate-bounce">
        <a href="#about-me-card">
          Meet Me
        </a>
      </div>
      <div className="font-outline-1 text-white text-xl mt-4 animate-bounce">
      Contact Me
    </div>
    </div>
  );
};

export default ScrollDownMessage;
