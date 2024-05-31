import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  bgColor?: string;
  maxWidth?: string;
  backgroundImage?: string;
  backgroundOpacity?: number;
}

const Container: React.FC<ContainerProps> = ({
  children,
  bgColor = 'bg-white',
  maxWidth = 'max-w-1440',
  backgroundImage,
  backgroundOpacity = 0.8,
}) => {
  return (
    <div className={`relative ${bgColor} ${maxWidth} mx-auto p-4`}>
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: backgroundOpacity,
          }}
        />
      )}
      <div className="relative z-10 justify-center">
        {children}
      </div>
    </div>
  );
};

export default Container;
