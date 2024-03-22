import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqItems } from '../constants/FormItems';

const Faqs = () => {
  return (
    <div className='flex flex-col gap-12 px-2'>
      <div className='flex justify-center items-center'>
        <h3 className='font-teko text-[60px] mb-5 leading-[0.85em] font-normal uppercase'>
          Mybrandfirst FAQ'S <span className='text-[#FC8D00]'>.</span>
        </h3>
      </div>
      <div>
        <Accordion
          type=""
          defaultValue={51}
          collapsible
          className="w-full flex flex-col gap-4"
        >
          {faqItems.map((item) => (
            <div key={item.id} className='text-right'>
              <AccordionItem
                value={item.id}
                className='text-slate-900 data-[state=open]:text-foreground flex flex-col items-start gap-4'
              >
                <AccordionTrigger className='text-left font-teko leading-[32px] font-normal text-[20px] uppercase cursor-pointer tracking-[1px] text-wrap'>
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="font-rubik text-[16px] font-normal leading-[2.125em]  text-justify">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
