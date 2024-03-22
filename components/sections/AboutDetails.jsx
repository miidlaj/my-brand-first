import React from 'react';
import TabBar from '@/components/sections/TabBar';

const AboutDetails = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8 xl:gap-14 xl:justify-between mt-12'>
      <div className='lg:flex-[0.7] flex flex-col gap-9'>
        <div>
          <h2 className='font-teko text-[36px] leading-[1.15em] sm:text-[42px] sm:leading-[1.15em] md:text-[60px] md:leading-[1em] xl:text-[70px] xl:leading-[0.9em] font-normal uppercase'>
            what we are <span className='text-[#FC8D00]'>.</span> 
          </h2>
        </div>
        <div>
          <TabBar/>
        </div>
      </div>
      <div className='lg:flex-[0.7]'>
        <div className='font-rubik text-base font-normal leading-[2.125em] text-justify'>
          Welcome to Mybrandfirst where innovation meets strategy to propel your brand into the digital spotlight. As a premier digital marketing agency, we specialize in crafting tailored solutions designed to elevate your online presence, engage your audience, and drive measurable results.
          <br/>
          <br/> In today's dynamic digital landscape, having a robust online presence is paramount. Whether you're a burgeoning startup, a small business aiming to expand, or an established enterprise seeking to stay ahead of the curve, our team of experts is here to guide you through the intricacies of digital marketing with finesse and expertise.
          <br/>
          <br/>
          Our suite of services encompasses the full spectrum of digital marketing disciplines, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content creation, email marketing, and more. Whether you're looking to boost your search engine rankings, enhance brand visibility on social media platforms, or drive qualified leads to your website, we have the expertise and resources to make it happen.
          <br/>
          <br/>
          So why wait? Let's embark on this digital journey together and unlock the full potential of your brand online. Get in touch with us today to schedule a consultation, and let's turn your digital aspirations into reality.
        </div>
      </div>
    </div>
  );
}

export default AboutDetails;
