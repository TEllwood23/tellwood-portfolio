import React from 'react';
import Image from 'next/image';

const AboutMeCard: React.FC = () => {
  return (
    <div className="flex flex-row bg-white m-2 p-2 max-w-sm mx-auto">
      <div className="ml-2 mr-5">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-sm ">
          I am a web developer with a passion for building beautiful and functional applications. I have experience with various technologies and enjoy learning new things.
        </p>
      </div>
        <div className= "mr-2">
          <Image
            src="/images/Avatar.jpg"
            alt="About Me"
            width={1000}
            height={400}
            className="rounded-lg border-black border-10"
          />
        </div>
    </div>
  );
};

export default AboutMeCard;
