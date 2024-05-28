import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  bgColor?: string;
  maxWidth?: string;
  backgroundImage?: string;
}

const Container: React.FC<ContainerProps> = ({ children, bgColor = 'bg-white', maxWidth = 'max-w-4xl', backgroundImage }) => {
  const backgroundStyle = backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {};
  return (
    <div className={`${bgColor} ${maxWidth} mx-auto p-4`} style={backgroundStyle}>
      {children}
    </div>
  );
};

export default Container;
