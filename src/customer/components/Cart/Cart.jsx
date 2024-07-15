import React from 'react'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const navigate = useNavigate();

    const handleCheckOut = ()=>{
        navigate("/Checkout?step=2")
    }

  return (
    <div>
        <div className='flex lg:grid grid-cols-3 lg:px-16 relative mt-7 '>
            <div className='col-span-2'>
                {[1,1,1,1].map((item)=><CartItem/>)}
            </div>
            <div className=' px-5 sticky top-0 h-[100vh] mt-5  lg:mt-0'>
                <div className='border rounded-md'>
                    <p className='uppercase font-bold opacity-60 p-2 flex justify-center'>
                        Price Details
                    </p>
                    <hr />
                    <div className='space-y-3 font-semibold'>
                        <div className='flex justify-between pt-3 text-black ml-5 mr-5'>
                            <span>Price</span>
                            <span>₹1500</span>
                        </div>

                        <div className='flex justify-between pt-3 text-black ml-5 mr-5'>
                            <span>Discount</span>
                            <span className='text-green-600'>-₹750</span>
                        </div>

                        <div className='flex justify-between pt-3 text-black ml-5 mr-5'>
                            <span>Delivery Charges</span>
                            <span className='text-green-600'>Free</span>
                        </div>

                        <div className='flex justify-between pt-3 text-black ml-5 mr-5'>
                            <span className='font-bold'>Total amount</span>
                            <span className='text-green-600 font-bold'>₹750</span>
                        </div>
                    </div>
                    <button
                    onClick={handleCheckOut}
                    type="submit"
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black-300 focus:ring-offset-2"
                    >
                    CheckOut
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart
