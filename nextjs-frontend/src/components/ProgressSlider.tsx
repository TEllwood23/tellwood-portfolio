'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'

import SilderImg01 from '/public/images/Portfolio_Placeholder_1.jpg';
import SilderImg02 from '/public/images/Portfolio_Placeholder_2.jpg';
import SilderImg03 from '/public/images/Portfolio_Placeholder_3.jpg';
import SilderImg04 from '/public/images/Portfolio_Placeholder_4.jpg';
import SilderIcon01 from '/public/images/Icon_1.svg';
import SilderIcon02 from '/public/images/Icon_2.svg';
import SilderIcon03 from '/public/images/Icon_3.svg';
import SilderIcon04 from '/public/images/Icon_4.svg';

export default function ProgressSlider() {

  const duration: number = 5000
  const itemsRef = useRef<HTMLDivElement>(null)
  const frame = useRef<number>(0)
  const firstFrameTime = useRef(performance.now())
  const [active, setActive] = useState<number>(0)

  const items = [
    {
      img: SilderImg01,
      desc: 'Omnichannel',
      buttonIcon: SilderIcon01,
    },
    {
      img: SilderImg02,
      desc: 'Multilingual',
      buttonIcon: SilderIcon02,
      },
      {
      img: SilderImg03,
      desc: 'Interpolate',
      buttonIcon: SilderIcon03,
    },
    {
      img: SilderImg04,
      desc: 'Enriched',
      buttonIcon: SilderIcon04,
      },
      ]

      useEffect(() => {
        firstFrameTime.current = performance.now()
        frame.current = requestAnimationFrame(animate)
        return () => {
          cancelAnimationFrame(frame.current)
        }
      }, [active])

      const animate = (now: number) => {
        let timeFraction = (now - firstFrameTime.current) / duration
        if (timeFraction <= 1) {
          frame.current = requestAnimationFrame(animate)
        } else {
          timeFraction = 1
          setActive((active + 1) % items.length)
        }
      }

      const heightFix = () => {
        if (itemsRef.current?.parentElement) {
          itemsRef.current.parentElement.style.height = `${itemsRef.current.clientHeight}px`;
        }
      };


      useEffect(() => {
        heightFix()
      }, [])


  return (
    <div className="w-full max-w-5xl mx-auto text-center">
      {/* Item image */}
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
            beforeEnter={() => heightFix()}
          >
              <Image className="rounded-xl" src={item.img} width={1024} height={576} alt={item.desc} />
            </Transition>
          ))}

        </div>
      </div>
      {/* Buttons */}
      <div className="max-w-xs sm:max-w-sm md:max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

        {items.map((item, index) => (
          <button
            key={index}
            className="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group"
            onClick={() => { setActive(index) }}
          >
            <span className="text-center flex flex-col items-center">
              <span className="flex items-center justify-center relative w-9 h-9 rounded-full bg-indigo-100 mb-2">
                <Image src={item.buttonIcon} alt={item.desc} />
              </span>
              <span className="block text-sm font-medium text-slate-900 mb-2">{item.desc}</span>
              <span className="block relative w-full bg-slate-200 h-1 rounded-full" role="progressbar" aria-valuenow={0}>
                <span className="absolute inset-0 bg-indigo-500 rounded-[inherit]" style={{ width: '0%' }}></span>
              </span>
            </span>
          </button>
        ))}

      </div>
    </div>
  )
}
