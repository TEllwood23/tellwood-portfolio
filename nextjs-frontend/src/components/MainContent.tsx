import React from 'react';
import Container from './Container';

const MainContent: React.FC = () => {
  return (
    <Container bgColor="bg-white" maxWidth="max-w-xl" backgroundImage="/path/to/your/image.jpg">
      <div className="relative z-20 p-8 mt-96">
        <h2 className="text-3xl font-bold mb-4">Main Content</h2>
        <p>Here is where your main content will appear as you scroll down.</p>
      </div>
    </Container>
  );
};

export default MainContent;
