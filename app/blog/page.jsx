import { blogNotes } from '@/components/constants/BlogNotes'
import { Category } from '@/components/constants/Category'
import Banner from '@/components/sections/Banner'
import BlogBanner from '@/components/sections/BlogBanner'
import BlogCard from '@/components/sections/BlogCard'
import BlogCard2 from '@/components/sections/BlogCard2'
import BlogCard3 from '@/components/sections/BlogCard3'
import BlogNav from '@/components/sections/BlogNav'
import CarouselBlog from '@/components/sections/CarouselBlog'
import ServiceCarousal from '@/components/sections/ServiceCarousal'
import { servicesDetails } from '@/lib/serviceDetails'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <BlogNav/>
      <ServiceCarousal/>
      <CarouselBlog/>
      <div  className=' flex flex-col lg:flex-row gap-10 px-8 pl-10 pt-12 items-start'>
          <div className='flex-1 '>
          {blogNotes.map((item, index) => (
        <BlogBanner key={item.id} item={item} isLast={index === blogNotes.length - 1} />
      ))}
          </div >
      <div className='flex-[.4] sm:px-12 lg:px-0 sm:mx-12 lg:mx-0 lg:sticky lg:-top-60'>
        <div className='w-full '>
        <BlogCard2 />
        <BlogCard /> 
        <div className='lg:hidden flex '>
        <BlogCard3/>
        </div>
       
        </div>
      </div>
      </div>
    </div>
  )
}

export default page