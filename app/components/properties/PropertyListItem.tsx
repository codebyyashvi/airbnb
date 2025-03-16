import React from 'react'
import Image from 'next/image'

const PropertyListItem = () => {
  return (
    <>
        <div className='cursor-pointer'>
            <div className='relative overflow-hidden aspect-square rounded-xl'>
                <Image fill src='/pool_1.avif' sizes='{max-width: 768px} 768pcx, {max-width: 1200px}: 768px, 768px' 
                    className='hover:scale-110 object-cover transition h-full w-full'
                    alt='pool house'
                />
            </div>
            <div className='mt-2'>
                <p className='text-lg font-bold'>Vadholi, India</p>
            </div>
            <div className='mt-2'>
                <p className='text-sm text-gray-700'><strong>₹13,581</strong> night</p>
            </div>
        </div>
        <div className='cursor-pointer'>
            <div className='relative overflow-hidden aspect-square rounded-xl'>
                <Image fill src='/pool_2.avif' sizes='{max-width: 768px} 768pcx, {max-width: 1200px}: 768px, 768px' 
                    className='hover:scale-110 object-cover transition h-full w-full'
                    alt='pool house'
                />
            </div>
            <div className='mt-2'>
                <p className='text-lg font-bold'>Girnare, India</p>
            </div>
            <div className='mt-2'>
                <p className='text-sm text-gray-700'><strong>₹18,459</strong> night</p>
            </div>
        </div>
        <div className='cursor-pointer'>
            <div className='relative overflow-hidden aspect-square rounded-xl'>
                <Image fill src='/pool_3.webp' sizes='{max-width: 768px} 768pcx, {max-width: 1200px}: 768px, 768px' 
                    className='hover:scale-110 object-cover transition h-full w-full'
                    alt='pool house'
                />
            </div>
            <div className='mt-2'>
                <p className='text-lg font-bold'>Pimplad Nasik, India</p>
            </div>
            <div className='mt-2'>
                <p className='text-sm text-gray-700'><strong>₹17,849</strong> night</p>
            </div>
        </div>
        <div className='cursor-pointer'>
            <div className='relative overflow-hidden aspect-square rounded-xl'>
                <Image fill src='/pool_4.avif' sizes='{max-width: 768px} 768pcx, {max-width: 1200px}: 768px, 768px' 
                    className='hover:scale-110 object-cover transition h-full w-full'
                    alt='pool house'
                />
            </div>
            <div className='mt-2'>
                <p className='text-lg font-bold'>Udaipur, India</p>
            </div>
            <div className='mt-2'>
                <p className='text-sm text-gray-700'><strong>₹12,782</strong> night</p>
            </div>
        </div>
        <div className='cursor-pointer'>
            <div className='relative overflow-hidden aspect-square rounded-xl'>
                <Image fill src='/pool_5.avif' sizes='{max-width: 768px} 768pcx, {max-width: 1200px}: 768px, 768px' 
                    className='hover:scale-110 object-cover transition h-full w-full'
                    alt='pool house'
                />
            </div>
            <div className='mt-2'>
                <p className='text-lg font-bold'>Igatpuri, India</p>
            </div>
            <div className='mt-2'>
                <p className='text-sm text-gray-700'><strong>₹73,128</strong> night</p>
            </div>
        </div>
        <div className='cursor-pointer'>
            <div className='relative overflow-hidden aspect-square rounded-xl'>
                <Image fill src='/pool_6.avif' sizes='{max-width: 768px} 768pcx, {max-width: 1200px}: 768px, 768px' 
                    className='hover:scale-110 object-cover transition h-full w-full'
                    alt='pool house'
                />
            </div>
            <div className='mt-2'>
                <p className='text-lg font-bold'>Awale, India</p>
            </div>
            <div className='mt-2'>
                <p className='text-sm text-gray-700'><strong>₹22,408</strong> night</p>
            </div>
        </div>
        <div className='cursor-pointer'>
            <div className='relative overflow-hidden aspect-square rounded-xl'>
                <Image fill src='/pool_7.avif' sizes='{max-width: 768px} 768pcx, {max-width: 1200px}: 768px, 768px' 
                    className='hover:scale-110 object-cover transition h-full w-full'
                    alt='pool house'
                />
            </div>
            <div className='mt-2'>
                <p className='text-lg font-bold'>Igatpuri, India</p>
            </div>
            <div className='mt-2'>
                <p className='text-sm text-gray-700'><strong>₹22,373</strong> night</p>
            </div>
        </div>
        <div className='cursor-pointer'>
            <div className='relative overflow-hidden aspect-square rounded-xl'>
                <Image fill src='/pool_8.avif' sizes='{max-width: 768px} 768pcx, {max-width: 1200px}: 768px, 768px' 
                    className='hover:scale-110 object-cover transition h-full w-full'
                    alt='pool house'
                />
            </div>
            <div className='mt-2'>
                <p className='text-lg font-bold'>Udaipur, India</p>
            </div>
            <div className='mt-2'>
                <p className='text-sm text-gray-700'><strong>₹9,665</strong> night</p>
            </div>
        </div>
    </>
  )
}

export default PropertyListItem
