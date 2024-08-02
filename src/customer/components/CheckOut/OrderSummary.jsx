import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getOrderById } from '../../../State/Order/Action'
import { createPayment } from '../../../State/Payment/Action'

const OrderSummary = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const searchparams = new URLSearchParams(location.search);
    const orderId = searchparams.get("order_id");
    const {order} = useSelector(store=>store);
    const jwt = localStorage.getItem("jwt");
    
    useEffect(()=>{
        dispatch(getOrderById(orderId));
    },[orderId])

    const handleCheckOut = ()=>{
        const data={orderId:order.order?._id,jwt}
        dispatch(createPayment(data));
    }

    return (
    <div>
        <div className='p-5 shadow-lg rounded-5-md border'>
            <AddressCard address = {order?.order?.shippingAddress} />
        </div>

            <div>
            <div className='flex lg:grid grid-cols-3  relative mt-7 '>
                <div className='col-span-2'>
                    {order?.order?.orderItems?.map((item)=><CartItem item={item} />)}
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
                                <span>₹{order?.order?.totalPrice}</span>
                            </div>

                            <div className='flex justify-between pt-3 text-black ml-5 mr-5'>
                                <span>Discount</span>
                                <span className='text-green-600'>-₹{order?.order?.discount}</span>
                            </div>

                            <div className='flex justify-between pt-3 text-black ml-5 mr-5'>
                                <span>Delivery Charges</span>
                                <span className='text-green-600'>Free</span>
                            </div>

                            <div className='flex justify-between pt-3 text-black ml-5 mr-5'>
                                <span className='font-bold'>Total amount</span>
                                <span className='text-green-600 font-bold'>₹{order?.order?.totalDiscountedPrice
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
    </div>
    )
}

export default OrderSummary
