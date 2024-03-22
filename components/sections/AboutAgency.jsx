import React from 'react';
import HomeTabs from './HomeTabs';
import Link from 'next/link';
import { Button } from '../ui/button';

const AboutAgency = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col xl:flex-row xl:justify-between xl:gap-12 gap-9'>
        <div className='flex flex-col gap-12 xl:flex-[0.65]'>
          <div className='flex flex-col gap-8'>
            <div>
              <h3 className='font-teko text-[60px] leading-[0.85em] font-normal uppercase'>our expert team<span>.</span></h3>
            </div>
            <div>
              <img src="/grp teaching3.jpg" alt="teams" className='object-cover sm:h-[350px] md:h-[480px] lg:h-[550px] rounded-lg h-[290px] w-full grayscale-[89%] hover:grayscale-0 xl:h-[380px] 2xl:max-h-[400px]'/>
            </div>
            <div className='font-rubik text-[16px] font-normal leading-[2.125em] text-justify'>
              At MyBrandFirst, we believe in putting your brand first. Our passion lies in crafting digital marketing strategies that elevate your brand's presence, drive engagement, and deliver measurable results. With a team of creative minds and digital experts, we're here to transform your online presence and help you achieve your business goals.
            </div>
            <div className='xl:flex justify-center mt-6 hidden'>
              <Link href='/about' key='button' className='text-center'>
                <Button className="text-[18px] font-normal leading-[30px] tracking-[0.1em] font-teko bg-[#FC8D00] hover:bg-foreground px-[70px] py-[33px] uppercase">
                  know more
                </Button>
              </Link>  
            </div>
          </div> 
        </div>
        <div className='xl:flex-[0.7] flex xl:pl-10'>
          <HomeTabs/>
        </div>
      </div>
    </div>
  );
};

export default AboutAgency;
