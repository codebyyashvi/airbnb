import React from 'react'
import Image from 'next/image'

const Categories = () => {
  return (
    <div className='pt-3 cursor-pointer pb-6 flex items-center space-x-12'>
        <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100'>
            <Image src="/ic_category.jpg" alt='Category-Beach' width={20} height={20} />
            <span className='text-xs'>Amazing pools</span>
        </div>
        <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100'>
            <Image src="/ic_category_2.webp" alt='Category-Beach' width={20} height={20} />
            <span className='text-xs'>Icons</span>
        </div>
        <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100'>
            <Image src="/ic_category_3.jpg" alt='Category-Beach' width={20} height={20} />
            <span className='text-xs'>Farms</span>
        </div>
        <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100'>
            <Image src="/ic_category_1.jpg" alt='Category-Beach' width={20} height={20} />
            <span className='text-xs'>OMG!</span>
        </div>
        <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100'>
            <Image src="/ic_category_4.jpg" alt='Category-Beach' width={20} height={20} />
            <span className='text-xs'>Castles</span>
        </div>
        <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100'>
            <Image src="/ic_category_5.jpg" alt='Category-Beach' width={20} height={20} />
            <span className='text-xs'>National Parks</span>
        </div>
        <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100'>
            <Image src="/ic_category_6.jpg" alt='Category-Beach' width={20} height={20} />
            <span className='text-xs'>LakeFront</span>
        </div>
        <div className='pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100'>
            <Image src="/ic_category_7.jpg" alt='Category-Beach' width={20} height={20} />
            <span className='text-xs'>Amazing Views</span>
        </div>
    </div>
  )
}

export default Categories
