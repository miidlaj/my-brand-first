
'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import BlogCard from './BlogCard'
import { Separator } from '../ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { blogNotes } from '../constants/BlogNotes'



const BlogBanner = ({item,isLast}) => {
  
  return (
      <Link href={`/blog/${item.id}`} className='flex flex-col justify-center items-center ' key={item.id} shallow>
        <img src={item.img} alt="blog1" className='w-full object-cover h-full' />
        <div className='w-full py-8'>
          <div className='flex flex-col justify-center items-center gap-6'>
              <div className="uppercase font-[700] tracking-[2px] text-[12px] text-[#FC8D00] ">
               { item.category}
              </div>

              <div className='text-center xl:px-2'>
                <h2 className='text-foreground leading-[44px] text-[40px] font-normal font-playfair_display tracking-[.8px] capitalize md:tracking-wide'>
               {item.heading}
                </h2>
              </div>
              <div className='font-normal font-playfair_display italic text-[#9e9e9e]'>
             {item.date}
              </div>

              <div >
                <p className='text-[16px] text-[#c4c4c4]  font-rubik  leading-[2.1em] first-letter:text-7xl first-letter:font-[400] first-letter:text-white
                  first-letter:mr-3 first-letter:float-left first-letter:font-playfair_display first-letter:uppercase first-letter:-mt-4 text-justify tracking-0 '>
                {item.introduction} ....
                </p>
              </div>
              <Link href={`/blog/${item.id}`}  className='text-[15px] font-open_sans  '>
                  <Button className="bg-transparent border-[1.5px] hover:border-slate-100 uppercase font-[700] text-foreground tracking-[3px] px-6 py-6 hover:bg-transparent rounded-none text-[#FC8D00] border-[#FC8D00]  hover:text-foreground">
                    Read More
                  </Button>
              </Link>
              <div className='flex justify-between w-full items-center'>
                <div className='flex gap-[1px] items-center'>
                  <Avatar>
                    <AvatarImage src="/logo.png" className=""/>
                  <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

                 
                  <div className='italic font-raleway tracking-tighter text-[14px]'>mybrandfirst</div>
                </div>
                <div className='italic font-raleway tracking-tighter text-[14px]'>
                  Comments Off
                </div>

              </div>
              {
                !isLast && <Separator className="w-full " /> 
              }      
              

          </div> 


          <div>

          </div>
          
        </div>
        
        </Link> 


      
   
  )
}

export default BlogBanner