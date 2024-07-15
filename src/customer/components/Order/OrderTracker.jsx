import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps = [
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
    "Delivered"
]


const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full pt-5'>
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label)=><Step>
                <StepLabel>{label}</StepLabel>
            </Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracker
