'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Campaigns } from '@/types/campaigns';

const MILLISECONDS = 5000;

type CarouselProps = {
  campaigns: Campaigns;
};

export default function Carousel({ campaigns }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const handleImageMouseEnter = () => {
    setIsHover(true);
  };

  const handleImageMouseLeave = () => {
    setIsHover(false);
  };

  const turnToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % campaigns.data.length);
  }, [campaigns.data.length]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (!isHover) {
        nextSlide();
      }
    }, MILLISECONDS);

    return () => {
      clearInterval(slideInterval);
    };
  }, [isHover, nextSlide]);

  return (
    <section
      className="relative z-10 h-[185px] xl:h-[500px]"
      onMouseEnter={handleImageMouseEnter}
      onMouseLeave={handleImageMouseLeave}
    >
      {campaigns?.data.map((campaign, index) => {
        const storyData: string[] = campaign.story.split('\r\n');
        return (
          <div
            key={campaign.id}
            className={`flex justify-center transition-opacity duration-1000 
            ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={campaign.picture}
              alt="carousel"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            <div className="absolute flex h-full w-full items-center xl:w-[1280px] xl:max-w-[1280px]">
              <div className="absolute ml-[23px] xl:ml-[87px]">
                <p className="text-[15px] leading-7 text-stylish-black xl:text-3xl xl:leading-[57px]">
                  {storyData[0]}
                  <br />
                  {storyData[1]}
                  <br />
                  {storyData[2]}
                </p>
                <p className="text-xs leading-7 text-stylish-black xl:text-xl xl:leading-[64px]">
                  {storyData[3]}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <ul className="absolute bottom-[18px] left-1/2 flex -translate-x-1/2 gap-x-[8.8px] xl:bottom-[34px] xl:gap-x-[22px]">
        {campaigns?.data.map((campaign, index) => (
          <li key={campaign.id}>
            <button
              type="button"
              aria-label="carousel"
              className={`h-1 w-1 rounded-full xl:h-2.5 xl:w-2.5 ${
                index === currentIndex ? 'bg-stylish-gold' : 'bg-white/40'
              }`}
              onClick={() => turnToSlide(index)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
