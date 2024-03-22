
import AboutDetalis from '@/components/sections/AboutDetails'
import Banner from '@/components/sections/Banner'
import MarketPlaceBanner from '@/components/sections/MarketPlaceBanner'
import CounterUp from '@/components/sections/Slider'
import SliderMotion from '@/components/sections/SliderMotion'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'


const About = () => {
  return (
    <div className='flex flex-col gap-12'>
      <Banner title="why do we" page="about us"/>
      <div className='flex mt-3 sm:mt-4 md:mt-6 lg:mt-8 gap-12 overflow-hidden'>
        <div className='flex lg:flex-row px-5 flex-col lg:gap-5 xl:gap-10'>
          <div className='flex flex-col flex-1 lg:px-9 md:px-6 sm:px-5 px-1'>
            <div className='flex'>
              <div>
                <img src="/grp teaching.jpg" className='object-cover grayscale-[89%] hover:grayscale-0' alt="about" />
              </div>
              <div className='bg-[#FC8D00] w-40 h-auto mt-10 px-1 xs:px-0'></div>
            </div>
            <div className='flex flex-row-reverse'>
              <div className='bg-[#FC8D00] w-[92%] xl:h-[41px] sm:h-[42px] lg:h-[34px] md:py-7 lg:py-5 xl:py-[22px] h-[18px] py-[17px] xs:py-1'></div>
            </div>
          </div>  
          <div className='flex-1 mt-12 lg:mt-0'>
            <div className='flex flex-col gap-5'>
              <h2 className='font-teko text-[36px] leading-[1.15em] sm:text-[42px] sm:leading-[1.15em] md:text-[60px] md:leading-[1em] xl:text-[70px] xl:leading-[0.9em] font-normal uppercase'>All About Us</h2>
              <div className="font-rubik text-base font-normal leading-[2.125em] text-justify lg:mr-4 mr-2">Introducing Mybrandfirst, where digital dreams become reality. We are a dynamic and innovative digital marketing agency dedicated to elevating your online presence and driving tangible results for your business. With a passion for creativity and a deep understanding of digital landscapes, we craft tailored strategies to propel your brand to new heights.</div>             
              <div className='flex justify-center items-center pb-10 pt-10'>
                <Link href='#about' key='about us'>
                  <Button className="text-[18px] font-normal leading-[30px] tracking-[0.1em] font-teko bg-[#FC8D00] hover:bg-foreground px-[50px] py-[33px] uppercase">know more</Button>
                </Link>   
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-2 mt-8 relative pt-12">
        <CounterUp/>
      </div>
      <div id="about" className='px-9'>
        <AboutDetalis/>
      </div>
      <MarketPlaceBanner/>
    </div>
  )
}

export default About
