import React from 'react'
import ProgressBars from './SliderMotionItems'

const SliderMotion = () => {
  const items = [
    {
      id : 33,
      title : 'Seo services',
      value: 93
    },
    {
      id : 34,
      title : 'Marketplace Management',
      value: 95
    },
    {
      id : 35,
      title : 'Web Development',
      value: 88
    },
    {
      id : 36,
      title : 'Social Media optimization',
      value: 93
    },
    {
      id : 37,
      title : 'WEBSITE ANALYTICS',
      value: 90
    },


    {
      id : 39,
      title : 'paid Advertisement',
      value: 89
    },
  ]

  return (
    <div className='
    pt-12
            grid 
            grid-cols-1 
            sm:grid-cols-1
            md:grid-cols-1
            lg:grid-cols-2
            xl:grid-cols-2
            2xl:grid-cols-2
            gap-5 gap-x-12 xl:px-0 mr-3 md:mr-4 lg:mr-3'> 
      {
       items?.map((item) => (
        <div key={item.id} className='lg:mx-3 xl:mx-5'>
         <ProgressBars value={item.value} title={item.title} />
         </div>
       ))
}
    </div>
  )
}

export default SliderMotion