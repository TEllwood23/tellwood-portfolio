// import React, { ReactNode } from 'react';

// interface ContainerProps {
//   children: ReactNode;
//   bgColor?: string;
//   maxWidth?: string;
//   backgroundImage?: string;
//   backgroundOpacity?: number; // Add a prop to control background opacity
// }

// const Container: React.FC<ContainerProps> = ({ children, bgColor = 'bg-white', maxWidth = 'max-w-1440', backgroundImage, backgroundOpacity = 0.8 }) => {
//   return (
//     <div className={`relative ${bgColor} ${maxWidth} mx-auto p-4`}>
//       {backgroundImage && (
//         <div
//           className="container-absolute container-inset-0 container-bg-cover container-bg-center container-z-0"
//           style={{
//             backgroundImage: `url(${backgroundImage})`,
//             opacity: backgroundOpacity,
//           }}
//         />
//       )}
//       <div className="container-relative container-z-10">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Container;


// components/Container.tsx
// import React, { ReactNode } from 'react';

// interface ContainerProps {
//   children: ReactNode;
//   bgColor?: string;
//   maxWidth?: string;
//   backgroundImage?: string;
//   backgroundOpacity?: number;
// }

// const Container: React.FC<ContainerProps> = ({
//   children,
//   bgColor = 'bg-white',
//   maxWidth = 'max-w-1440',
//   backgroundImage,
//   backgroundOpacity = 0.8,
// }) => {
//   return (
//     <div className={`relative ${bgColor} ${maxWidth} mx-auto p-4`}>
//       {backgroundImage && (
//         <div
//           className="absolute inset-0 bg-cover bg-center z-0"
//           style={{
//             backgroundImage: `url(${backgroundImage})`,
//             opacity: backgroundOpacity,
//           }}
//         />
//       )}
//       <div className="relative z-10">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Container;

// components/Container.tsx
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
  maxWidth = 'max-w-3xl',
  backgroundImage,
  backgroundOpacity = 0.8,
}) => {
  return (
    <div className={`relative ${bgColor} ${maxWidth} mx-auto p-4`}>
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center z-0 fixed-background"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: backgroundOpacity,
          }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Container;
