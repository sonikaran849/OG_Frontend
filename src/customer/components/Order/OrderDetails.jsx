import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
        <div>
            <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
            <AddressCard/>
        </div>

        <div className='py-20 m-5 flex items-center justify-between border rounded-md shadow-lg '>
            <OrderTracker activeStep={3}/>
            <button
                    type="submit"
                    className=" flex w-[12rem] h-[3rem] items-center mr-5 rounded-md border border-transparent bg-black px-8 pl-5 text-base font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black-300 focus:ring-offset-2"
                >
                    Cancel Order
            </button>
        </div>

        <Grid container className='space-y-5'>
          {[1,1,1,1].map((items)=><Grid item container 
          className='shadow-xl rounded-md p-5 border'
          sx={{alignItems:"center",justifyContent:"space-between"}}>

              <Grid item xs={6}>
                <div className='flex items-center space-x-4'>
                  <img  className="w-[7rem] h-[7rem] object-cover object-top" src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710914966_5557876.jpg?format=webp&w=480&dpr=1.3" alt="" />

                  <div className='space-y-2'>
                    <p className='font-semibold' >Peanuts:chillin</p>
                    <p className='text-sm opacity-60 space-x-3'><span>Color : Beige, </span> <span>Size : L</span></p>
                    <p>Seller: Sunil Nahata</p>
                    <p>₹750</p>
                  </div>
                </div>
              </Grid>

              <Grid item >
                <Box sx={{color:'black'}}>
                  <StarBorderIcon sx={{fontSize:"2.5rem"}} className='px-2' />
                  <span>Rate & Review Product</span>
                </Box>
              </Grid>
          </Grid>)}
        </Grid>
    </div>
  )
}

export default OrderDetails
