// components/Carousel.tsx

import { useState, useRef, useEffect, useCallback } from 'react';
import { Transition } from '@headlessui/react';
import Image, { StaticImageData } from 'next/image';

import Img1 from '/public/images/Portfolio_Placeholder_1.jpg';
import Img2 from '/public/images/Portfolio_Placeholder_2.jpg';
import Img3 from '/public/images/Portfolio_Placeholder_3.jpg';
import Icon1 from '/public/images/Icon_1.svg';
import Icon2 from '/public/images/Icon_2.svg';
import Icon3 from '/public/images/Icon_3.svg';

interface Item {
  img: StaticImageData;
  desc: string;
  buttonIcon: StaticImageData;
}

const items: Item[] = [
  { img: Img1, desc: 'Project 1', buttonIcon: Icon1 },
  { img: Img2, desc: 'Project 2', buttonIcon: Icon2 },
  { img: Img3, desc: 'Project 3', buttonIcon: Icon3 },
];

const Carousel: React.FC = () => {
  const duration = 5000;
  // Initialize ref to null (based on Jared's suggestion)
  const itemsRef = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number>(0);
  const firstFrameTime = useRef(performance.now());
  const [active, setActive] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const animate = useCallback(
    (now: number) => {
      let timeFraction = (now - firstFrameTime.current) / duration;
      if (timeFraction <= 1) {
        setProgress(timeFraction * 100);
        frame.current = requestAnimationFrame(animate);
      } else {
        setProgress(0);
        setActive((active + 1) % items.length);
      }
    },
    [active, duration, items.length]
  );
  useEffect(() => {
    firstFrameTime.current = performance.now();
    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
  }, [animate]);

  const heightFix = () => {
    if (itemsRef.current?.parentElement) {
      itemsRef.current.parentElement.style.height = `${itemsRef.current.clientHeight}px`;
    }
  };

  useEffect(() => {
    heightFix();
  }, [active]);

  return (
    <div className="w-full max-w-5xl mx-auto text-center">
      <div className="transition-all duration-150 delay-300 ease-in-out">
        <div className="relative flex flex-col" ref={itemsRef}>
          {items.map((item, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 scale-105"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in-out duration-300 absolute"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              beforeEnter={heightFix}
            >
              <Image className="rounded-xl" src={item.img} width={1024} height={576} alt={item.desc} />
            </Transition>
          ))}
        </div>
      </div>
      <div className="max-w-xs sm:max-w-sm md:max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {items.map((item, index) => (
          <button
            key={index}
            className="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group"
            onClick={() => {
              setActive(index);
              setProgress(0);
            }}
          >
            <span
              className={`text-center flex flex-col items-center ${
                active === index ? '' : 'opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity'
              }`}
            >
              <span className="flex items-center justify-center relative w-9 h-9 rounded-full bg-indigo-100 mb-2">
                <Image src={item.buttonIcon} alt={item.desc} />
              </span>
              <span className="block text-sm font-medium text-slate-900 mb-2">{item.desc}</span>
              <span
                className="block relative w-full bg-slate-200 h-1 rounded-full"
                role="progressbar"
                aria-valuenow={active === index ? progress : 0}
              >
                <span className="absolute inset-0 bg-indigo-500 rounded-[inherit]" style={{ width: active === index ? `${progress}%` : '0%' }}></span>
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
