import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../State/Cart/Action'

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const jwt = localStorage.getItem("jwt");
    const {cart}=useSelector(store=>store);
    const handleCheckOut = ()=>{
        navigate("/Checkout?step=2")
    }

    useEffect(()=>{
        dispatch(getCart())
    },[cart.updateCartItem,cart.deleteCartItem])

  return (
    <div>
        <div className='flex lg:grid grid-cols-3 lg:px-16 relative mt-7 '>
            <div className='col-span-2'>
                {cart?.cart?.cartItems?.map((item)=><CartItem  item={item}/>)}
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
                            <span>₹{cart?.cart?.totalPrice}</span>
                        </div>

                        <div className='flex justify-between pt-3 text-black ml-5 mr-5'>
                            <span>Discount</span>
                            <span className='text-green-600'>-₹{cart?.cart?.discount}</span>
                        </div>

                        <div className='flex justify-between pt-3 text-black ml-5 mr-5'>
                            <span>Delivery Charges</span>
                            <span className='text-green-600'>Free</span>
                        </div>

                        <div className='flex justify-between pt-3 text-black ml-5 mr-5'>
                            <span className='font-bold'>Total amount</span>
                            <span className='text-green-600 font-bold'>₹{cart?.cart?.totalDiscountedPrice
                            }</span>
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
