import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md mb-3'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img
                className='w-full h-full object-cover object-top'
                src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710914966_5557876.jpg?format=webp&w=480&dpr=1.3" alt="" />
            </div>

            <div className='ml-5 space-y-1'>
                <p className='font-semibold'>Peanuts: Chillin</p>
                <p className='opacity-70'>Size : L</p>
                <p className='opacity-70'>Seller: Sunil Nahata</p>
                <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                    <p className='font-semibold '>₹750</p>
                    <p className='opacity-50 line-through'>₹1500</p>
                    <p className='text-green-600 font-semibold'>50% Off</p>
                </div>
            </div>

        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton>
                        <RemoveCircleOutlineIcon/>
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>3</span>
                    <IconButton>
                        <AddCircleOutlineIcon/>
                    </IconButton>
                    
                </div>
                <div>
                    <Button>remove</Button>
                </div>
        </div>
    </div>
  )
}

export default CartItem
