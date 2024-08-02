import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import OrderCard from './OrderCard'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderHistory } from '../../../State/Order/Action'


const orderStatus = [
    {label:"On the way", value:"on_the_way"},
    {label:"Delivered", value:"delivered"},
    {label:"Cancelled", value:"cancelled"},
    {label:"Returned", value:"returned"},
]


const Order = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {order}=useSelector(store=>store);

    useEffect(() => {
        dispatch(getOrderHistory({ jwt }));
      }, [jwt]);

    console.log("orders: ", order);
    console.log("users orders ",order.orders)

  return (
    <div>
        <Grid container sx={{justifyContent:"space-between"}}>
            <Grid item xs={2.5}>
                <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                    <h1 className='font-bold text-lg'>Filter</h1>

                    <div className='space-y-4 mt-10'>
                        <h1 className='font-semibold'>Order Status</h1>
                        {orderStatus.map((option)=>
                        <div className='flex items-center'>
                            <input type="checkbox" defaultValue={option.value}
                            className='h-4 w-4 border-gray-400 text-black'
                            />
                            <label htmlFor={option.label}
                            className='ml-3 text-sm text-gray-600'
                            >
                                {option.label}
                            </label>
                        </div>)}
                    </div>
                </div>
            </Grid>

            <Grid item xs={9}>
                <Box className="space-y-5 ">
                {order.orders?.length>0 && order.orders?.map((order )=> {
                return order?.orderItems?.map((item,index)=> 
                <div className='border rounded-md shadow-lg mr-10 p-5 hover:shadow-2xl' >
                    <OrderCard item={item} order={order} />
                </div>)
                })}
                </Box>
                        
            </Grid>
        </Grid>
    </div>
  )
}

export default Order
{/* <div className='border rounded-md shadow-lg mr-10 p-5 hover:shadow-2xl'>
                    <OrderCard item={item} order={order} />
                </div> */}