import React from 'react';
import NavbarRoutes from './NavbarRoutes';
import Link from 'next/link';
import { Separator } from '../ui/separator';

const Banner = ({ title, page, active, servicePage }) => {
  return (
    <div className="lg:h-[470px] h-[350px] w-full bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/dm6-modified.jpg)' }}>
      <div className="">
        <div className="flex flex-col w-full">
          <NavbarRoutes />
          <Separator className="bg-slate-300" />
        </div>
        <div className="flex flex-col justify-center items-center lg:h-[300px] h-[200px] text-foreground">
          <h1 className="text-center xl:text-[70px] font-teko xl:leading-[1em] uppercase tracking-[1px] flex flex-wrap font-[600] lg:text-[60px] lg:leading-[1.05em] sm:text-[48px] leading-[1.1em] text-[42px]">{title}</h1>
          <div className="text-center flex flex-col sm:flex-row gap-3 text-[20px] font-normal font-teko uppercase leading-[30px] tracking-widest items-center">
            <div className="flex flex-row gap-4 items-center">
              <Link key="home" href="/" className="text-[20px] font-[500px font-teko uppercase leading-[30px] tracking-widest">home</Link>
              <div className="w-[5px] bg-foreground py-[.9px] mb-[3px]" />
              <div className="text-[20px] font-[500px font-teko uppercase leading-[30px] tracking-widest">{page}</div>
            </div>
            {active && (
              <div className="flex flex-row gap-4 items-center">
                <div className="w-[5px] bg-foreground py-[.9px] mb-[3px] hidden sm:flex" />
                <div className="text-[#FC8D00] text-[20px] font-[500px] font-teko uppercase leading-[30px] tracking-widest">{servicePage}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
