import Image from 'next/image'
import React from 'react'

const SingleProductPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-red-500 md:flex-row'>
      {/* IMAGE CONTAINER */}
      <div className='relative'>
          <Image src="" alt='' className='object-contain' fill/> 
      </div>
      {/* IMAGE CONTAINER */}
    </div>
  )
}

export default SingleProductPage
