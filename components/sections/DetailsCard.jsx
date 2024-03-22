import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const DetailsCard = ({ data }) => {
  return (
    <div className="flex flex-col gap-8 w-full group hover:border border-slate-300 rounded-2xl text-slate-900 bg-slate-100 justify-between">
      <div>
        <div className="w-full relative overflow-hidden rounded-xl">
          <img src={data.img} alt="details" className="grayscale-[89%] hover:grayscale-0 object-cover aspect-square h-full w-full group-hover:scale-110 transition" />
        </div>
     
        <div className="mt-5 flex flex-col gap-8 px-9">
          <div className="font-normal text-[30px] uppercase leading-[.85em] font-teko underline hover:no-underline hover:text-[#FC5D00]">
            {data.title}
          </div>
          <div>
            <div className="font-rubik text-[16px] font-normal leading-[34px] flex gap-3 text-justify">
              {data.answer}
            </div> 
          </div>
        </div> 
      </div>
      <div className="flex justify-center items-center py-2 pb-14 -pt-5">
        <Link href="/contact" key={data.id}>
          <Button className="text-[18px] font-normal leading-[30px] tracking-[0.1em] font-teko bg-[#FC5D00] hover:bg-slate-900 hover:text-foreground px-[50px] py-[33px] uppercase">
            Contact us
          </Button>
        </Link>   
      </div>
    </div> 
  );
};

export default DetailsCard;
