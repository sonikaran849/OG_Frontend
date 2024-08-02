import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { Navigate, useNavigate } from 'react-router-dom';

const OrderCard = ({item , order}) => {
    const navigate = useNavigate();
  return (
    <div>       
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div onClick={()=>navigate(`/account/order/${order?._id}`)} className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top'
                    src={item?.product?.imageUrl} alt="" />
                    <div className='ml-5 space-y-2'>
                        <p>{item?.product?.brand}</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: {item?.size}</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: 
                            {item?.product?.color}</p>
                    </div>
                </div>
            </Grid>

            <Grid item xs={2}>
                <p>₹{item?.discountedPrice}</p>
            </Grid>

            <Grid item xs={4}>
                {true &&<div>
                    <p>
                        <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm mb-1'/>
                        <span>
                            Your Item will be delivered soon
                        </span>
                    </p>
                </div>}
                {false &&<p>
                    <span>
                        Delivered On April 30
                    </span>
                </p>}
            </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard
