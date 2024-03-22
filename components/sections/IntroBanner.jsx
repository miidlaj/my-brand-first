import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const IntroBanner = () => {
  return (
    <div className='px-7 h-full'>
      <div className='flex flex-col lg:flex-row gap-12 h-full'>
        <div className='lg:flex-1 h-full'>
          <div className='sm:px-7 relative h-full'>
            <img src="/class6.jpg" className='object-cover lg:h-auto md:h-screen sm:h-full w-full rounded-xl grayscale-[89%] hover:grayscale-0 min-h-[380px]' alt="banner" />
            <div className='flex absolute w-80 bottom-0 left-0 bg-[#FC8D00] rounded-lg flex-row justify-around items-center sm:py-5 sm:px-5 py-1 px-2'>
              <div className='text-slate-900 text-[30px] font-normal font-teko leading-[1em] uppercase'>
                Believe in the best to do the best
              </div>
              <div className='flex mt-12 mr-2'>
                <div className='bg-black rounded-full px-4 py-4 text-base'>
                  <img src="/right1.png" alt="" className='object-cover w-full h-full' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:flex-1 px-1 pl-2 pt-4'>
          <div className='font-rubik text-[16px] font-normal leading-[2.125em] text-justify'>
            Welcome to a world where innovation meets strategy to propel your brand into the digital spotlight. As a premier digital marketing agency, we specialize in crafting tailored solutions designed to elevate your online presence, engage your audience, and drive measurable results.
            <br />
            Our diverse suite of services encompasses the full spectrum of digital marketing disciplines, including SEO, PPC advertising, social media marketing, content creation, email marketing, and beyond. Whether you aspire to ascend search engine rankings, amplify brand visibility across social platforms, or drive qualified leads to your website, we possess the expertise and resources to actualize your goals. Reach out to us today to schedule a consultation, and let's collectively transform your digital aspirations into concrete reality.
          </div>
          <div className='flex justify-center items-center py-2 mt-10'>
            <Link href='/about' key='contact'>
              <Button className='text-[18px] font-normal leading-[30px] tracking-[0.1em] font-teko bg-[#FC8D00] hover:bg-foreground px-[50px] py-[33px] uppercase'>
                discover more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroBanner;
