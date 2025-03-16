import React from 'react'
import Image from 'next/image'

const PropertyListItem = () => {
  return (
    <div className='cursor-pointer'>
        <div className='relative overflow-hidden aspect-square rounded-xl'>
            <Image fill src='/pool_1.avif' sizes='{max-width: 768px} 768pcx, {max-width: 1200px}: 768px, 768px' 
                className='hover:scale-110 object-cover transition h-full w-full'
                alt='pool house'
            />
        </div>
        <div className='mt-2'>
            <p className='text-lg font-bold'>Property Name</p>
        </div>
        <div className='mt-2'>
            <p className='text-sm text-gray-700'><strong>₹13,581</strong> night</p>
        </div>
    </div>
  )
}

export default PropertyListItem
