'use client';
import React from 'react';
import CountUp from 'react-countup';

const CounterUp = () => {
  return (
    <div className={`flex-col flex md:flex-row justify-center items-center gap-12 xl:pl-12 bg-[url('/bl6.jpg')] bg-cover bg-center bg-no-repeat py-20 bg-fixed grayscale `}>
      <div className='md:flex-1 xl:px-12 px-12 md:px-6 w-full '>
        <div className='flex flex-col backdrop-opacity-10 backdrop-invert bg-white/50 text-black py-5 rounded-2xl w-full xl:w-4/5'>
          <div className='text-center'>
            <h2 className='font-teko text-[80px] font-normal leading-[1em] tracking-0'>
              <CountUp
                start={0}
                end={1019}
                duration={2}
                enableScrollSpy={true}
              />
              +
            </h2>
            <div>
              <div className='font-teko font-normal  tracking-[1px] text-[30px] leading-[.7em]'>
                projects completed
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:flex-1 xl:px-12 px-12 md:px-6 w-full'>
        <div className='flex flex-col text-black backdrop-opacity-10 backdrop-invert bg-white/50  text- py-5 rounded-2xl xl:w-4/5 '>
          <div className='text-center '>
            <h2 className='font-teko text-[80px] font-normal leading-[1em] tracking-0'>
              <CountUp
                start={0}
                end={564}
                duration={2}
                enableScrollSpy={true}
              />
              +
            </h2>
            <div>
              <div className='font-teko font-normal text-[30px] tracking-[1px] leading-[.7em]'>
                clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterUp;
