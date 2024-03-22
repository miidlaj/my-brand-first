'use client';
import NavbarRoutes from '@/components/sections/NavbarRoutes';
import React from 'react';
import { motion } from 'framer-motion';
import { Separator } from '../ui/separator';
import { buttonVariant, descVariant, navVariant, navVariants, textVariant } from '../utils/motion';
import Link from 'next/link';
import { Button } from '../ui/button';

const NavbarComponent = () => {
  return (
    <motion.div className="relative w-full h-full overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 opacity-0 w-full overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/contacts10.jpg)',
          filter: 'grayscale(100)',
        }}
        initial="hidden"
        animate="show"
        variants={navVariants}
      />
      <div className="relative z-10">
        <NavbarRoutes />
        <Separator className='bg-slate-300' />
      </div>

      <div className='flex flex-col justify-center items-center relative px-1 gap-5 h-[70%]'>
        <motion.div initial="hidden" whileInView="show" variants={descVariant}>
          <h5 className='uppercase text-[30px] font-normal leading-[1em] text-slate-100 font-teko'>Welcome to <span className='text-[#FC8D00]'>MybrandFirst</span></h5>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" variants={textVariant}>
          <h1 className='text-center xl:text-[70px] font-teko xl:leading-[1em] uppercase tracking-[1px] flex flex-wrap font-[600] lg:text-[60px] lg:leading-[1.05em] text-[48px] leading-[1.1em] text-slate-50'>Digital marketing agency <br />in Bangalore</h1>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" variants={buttonVariant} className='lg:pt-5 pt-8'>
          <Link href='/about' key='contact' className='relative z-10 opacity-100 cursor-pointer'>
            <Button className="text-[18px] font-normal leading-[30px] tracking-[0.1em] font-teko bg-[#FC8D00] hover:bg-black hover:text-foreground px-[50px] py-[33px] z-10 uppercase cursor-pointer">discover more</Button>
          </Link>
        </motion.div>
      </div>

      <motion.div initial="hidden" whileInView="show" variants={navVariant} className='absolute bottom-0 right-0 w-full overflow-hidden leading-0 z-1'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path className='realtive block z-1 fill-[#fff8ef]' fill-opacity=".2" d="M0,224L40,229.3C80,235,160,245,240,250.7C320,256,400,256,480,234.7C560,213,640,171,720,144C800,117,880,107,960,133.3C1040,160,1120,224,1200,229.3C1280,235,1360,181,1400,154.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </motion.div>
    </motion.div>
  );
}

export default NavbarComponent;
