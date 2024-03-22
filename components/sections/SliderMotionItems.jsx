'use client'
import React from 'react';
import { motion,animate } from 'framer-motion';
import CountUp from 'react-countup';
import { Item } from '@radix-ui/react-accordion';

const ProgressBars = ({ value,title }) => {
 
  return (
    <div className='flex flex-col gap-1 '>
      <div className='flex flex-row justify-between'>
         <div className='font-teko text-[20px] leading-[1.1em] tracking-[1px] uppercase'>
          <div>
          <CountUp 
            start ={0}
            end= {value}
            duration={2.75}
            enableScrollSpy={true}></CountUp>%
          </div>
          </div>
        <div>
            <div className='font-teko text-[20px] leading-[1.1em] tracking-[1px] uppercase'>
              {title}
            </div>
          </div>
          </div>
      <div className='  h-[7px] flex flex-row justify-start items-stretch rounded-xl overflow-hidden border'>
        <motion.div 
          initial={{
            width: '0'
          }}
          whileInView={{
            width: `${value}%`
          }}
          transition={{
            duration: 1
          }}
          className='w-0 bg-[#FC8D00] '/>
      </div>
      
    </div>
  );
};
export default ProgressBars;