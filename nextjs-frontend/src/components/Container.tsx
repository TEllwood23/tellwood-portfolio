import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  bgColor?: string;
  maxWidth?: string;
  backgroundImage?: string;
}

const Container: React.FC<ContainerProps> = ({ children, bgColor = 'bg-white', maxWidth = 'max-w-1440', backgroundImage }) => {
  const backgroundStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }
    : {};

  return (
    <div className={`relative ${bgColor} ${maxWidth} mx-auto`} style={backgroundStyle}>
      {children}
    </div>
  );
};

export default Container;
