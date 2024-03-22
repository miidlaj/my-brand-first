import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabBar = () => {
  return (
    <div>
      <Tabs defaultValue="mission" className='xl:w-[89%] flex flex-col gap-9 items-start'>
        <TabsList className="flex flex-col sm:flex-row gap-4">
          <TabsTrigger value="mission" className='px-11 py-3 leading-[30px] text-[20px] font-[500] tracking-[0.07em] uppercase font-teko bg-[#FC8D00] w-full sm:w-auto'>our mission</TabsTrigger>
          <TabsTrigger value="passion" className='px-11 py-3 leading-[30px] text-[20px] font-[500] tracking-[0.07em] uppercase font-teko bg-[#FC8D00] w-full sm:w-auto'>our passion</TabsTrigger>
        </TabsList>
        <TabsContent value="mission" className="font-rubik text-base font-normal leading-[2.125em] pt-12 sm:pt-0 mt-12 sm:mt-0 text-justify flex flex-col gap-9">
          <div className='px-4'>
          <img src="/contacts11.jpg" alt="conatc" className='object-cover w-auto h-auto pt-6  ' />
          </div>
          At Mybrandfirst, we understand that every client is unique, and that&#39;s why we take a personalized approach to every project we undertake. By combining cutting-edge technologies with proven methodologies, we deliver comprehensive digital marketing strategies that are aligned with your business objectives and tailored to your target audience.
        </TabsContent>
        <TabsContent value="passion" className="font-rubik text-base font-normal leading-[2.125em]  sm:mt-0 sm:pt-0 text-justify flex flex-col gap-9">
        <div className='px-4'>
          <img src="/contacts8.jpg" alt="conatc" className='object-cover w-auto h-auto -pt-5  ' />
          </div>
          What sets us apart is our unwavering commitment to excellence and our relentless pursuit of innovation. We stay ahead of the curve by continuously monitoring industry trends, experimenting with new technologies, and refining our strategies to ensure maximum effectiveness. When you partner with Mybrandfirst, you can rest assured that you're working with a team that is dedicated to your success.
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabBar;
