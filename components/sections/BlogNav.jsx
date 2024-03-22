import React from 'react'
import NavbarRoutes from './NavbarRoutes'
import { Separator } from '../ui/separator'

const BlogNav = () => {
  return (
    <div className="lg:h-[470px] h-[420px] w-full bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/blog/blogbanner.png)' }}>
      <div className="">
        <div className="flex flex-col w-full">
          <NavbarRoutes />
          <Separator className="bg-slate-300 hidden lg:flex" />
        </div>
        <div className="flex flex-col justify-center items-center lg:h-[300px] h-[200px] text-foreground g md:w-[70%] px-3 sm:px-0 md:px-8 mt-12 lg:mt-8 sm:w-[85%]">
       <div className=' justify-center items-center gap-8 lg:gap-12' >
        <h5 className=' text-left uppercase text-[20px]  lg:text-[30px] font-normal leading-[1em] text-slate-100 font-teko'>Welcome to <span className='text-[#FC8D00]'>MybrandFirst</span></h5>
        <h2 className='mt-3 lg:mt-5 xl:text-[50px] font-teko xl:leading-[1em] uppercase tracking-[1px] flex flex-wrap font-[400] sm:text-[45px] lg:leading-[1.05em] text-[40px] leading-[1.1em] text-slate-50 text-left'> Digital marketing agency <br />in Bangalore</h2>
        <p className='mt-5 lg:text-[25px] text-[20px] font-[300] leading-[1em] text-slate-100 font-teko tracking-wide'>
        MybrandFirst makes online marketing easy. Innovative tools and meaningful, <br/> insights to help you learn, grow and succeed
        </p>
        </div> 
        </div>
      </div>
    </div>
  )
}

export default BlogNav