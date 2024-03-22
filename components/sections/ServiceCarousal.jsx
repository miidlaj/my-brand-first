import { servicesDetails } from '@/lib/serviceDetails'
import Link from 'next/link'
import React from 'react'

const ServiceCarousal = () => {
  return (
    <div className='flex 
    py-10
    xl:py-12
    items-center 
    overflow-x-auto h-full  overflow-y-hidden'>
      <div className='justify-between flex flex-row text-center gap-12  font-playfair_display px-3 '>
      {servicesDetails.map((item) => (
        <Link key={item.id} href={`/services/${item.id}`} shallow className='cursor-pointer text-center  hover:text-[#FC8D00] flex items-center flex-nowrap text-nowrap'>
          <div className='font-medium sm:text-[18px] tracking-wide text-[17px] text-nowrap flex-nowrap whitespace-nowrap'>
            {item.title}
          </div>
        </Link>
      ))}
    </div>
    </div>
  )
}

export default ServiceCarousal