import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>

            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#6495ED"}}>
                        K
                    </Avatar>
                </Box>
            </Grid>

            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Karan</p>
                        <p className='opacity-70'>April 26, 2024</p>
                    </div>
                </div>

                <Rating value={4.3} name='half-rating' readOnly precision={0.5}/>
                <p>Nice Product, I love this t-shirt</p>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard
