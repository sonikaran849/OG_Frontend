import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { Navigate, useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
  return (
    <div>       
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div onClick={()=>navigate(`/account/order/${1}`)} className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top'
                    src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1710914966_5557876.jpg?format=webp&w=160&dpr=1.3" alt="" />
                    <div className='ml-5 space-y-2'>
                        <p>Peanuts: Chillin</p>
                        <p className='opacity-50 text-xs font-semibold'>Size: L</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Beige</p>
                    </div>
                </div>
            </Grid>

            <Grid item xs={2}>
                <p>₹750</p>
            </Grid>

            <Grid item xs={4}>
                {true &&<div>
                    <p>
                        <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm mb-1'/>
                        <span>
                            Delivered On April 30
                        </span>
                    </p>
                    <p className='text-xs'>
                        Your item has been delivered
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
