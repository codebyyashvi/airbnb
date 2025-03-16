import React from 'react'
import Image from 'next/image'

const PropertyDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
        <div className='w-full h-[64vh] overflow-hidden rounded-xl relative'>
            <Image fill src='/pool_1.avif'
                className='object-cover w-full h-full'
                alt='Pool house'
            />
        </div>
        <div className='mt-1 grid grid-cols-1 md:grid-cols-5 gap-4'>
            <div className='py-6 pr-6 col-span-3'>
                <h1 className='mt-2 text-4xl'>Property Name</h1>
                <span className='mb-6 block text-lg text-gray-600'>
                    4 guests - 2 bedrooms - 1 bathroom
                </span>
                <br />
                <div className='py-6 flex items-center space-x-4'>
                    
                </div>
            </div>
            <div>
                right
            </div>
        </div>
    </main>
  )
}

export default PropertyDetailPage
