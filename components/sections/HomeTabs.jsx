'use client';
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Teamswork } from '../constants/Listings';
import Link from 'next/link';
import { Button } from '../ui/button';

const HomeTabs = () => {
  return (
    <div className=' flex w-full'> 
      <Accordion type='' defaultValue={101} collapsible className='w-full flex flex-col gap-4'>
        {Teamswork.map((item) => ( 
          <div key={item.id} className='text-left w-full'>
            <AccordionItem value={item.id} className='text-slate-900 data-[state=open]:text-foreground flex flex-col items-start gap-4 w-full'>
              <AccordionTrigger className='text-left font-teko leading-[32px] font-normal text-[20px] uppercase cursor-pointer tracking-[1px] w-full data-[state=open]:text-[35px] px-1'>
                {item.title}
              </AccordionTrigger>
              <AccordionContent className='w-full'>
                <img src={item.img} className='object-cover rounded-lg grayscale-[89%] hover:grayscale-0' alt='banners' />
              </AccordionContent>
              <AccordionContent className='font-rubik text-[16px] font-normal leading-[2.125em] w-full text-justify'>
                {item.desc}
              </AccordionContent>
              {item.id === 106 &&
                <AccordionContent className='flex justify-center items-center ml-5'>
                  <Link href='/contact' className='text-center'>
                    <Button size='hero' className='font-teko leading-[30px] font-normal text-[18px] tracking-widest text-black bg-[#FC8D00] hover:text-black hover:bg-foreground'>
                      contact us
                    </Button>
                  </Link>
                </AccordionContent>
              }
            </AccordionItem>
          </div>
        ))}
      </Accordion>
    </div>
  );
};

export default HomeTabs;
