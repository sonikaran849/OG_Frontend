import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { removeCartItem, updateCartItem } from '../../../State/Cart/Action';
import { useDispatch } from 'react-redux';
const CartItem = ({item}) => {
    const jwt = localStorage.getItem("jwt");
    const dispatch = useDispatch()
    const handleUpdateCartItem=(num)=>{
        const data = {data:{quantity:item?.quantity+num},cartItemId:item?._id}
        dispatch(updateCartItem(data))
    }

    const handleRemoveCartItem = ()=>{
        const data = { cartItemId: item?._id, jwt };
        dispatch(removeCartItem(data))
    }


  return (
    <div className='p-5 shadow-lg border rounded-md mb-3'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img
                className='w-full h-full object-cover object-top'
                src={item?.product?.imageUrl} alt="" />
            </div>

            <div className='ml-5 space-y-1'>
                <p className='font-semibold'>{item.product?.brand}</p>
                <p className='opacity-70'>Size : {item?.size}</p>
                <p className='opacity-70'>Seller: Souled Store</p>
                <div className='flex space-x-5 items-center text-gray-900 pt-6'>
                    <p className='font-semibold '>₹{item?.product?.discountedPrice}</p>
                    <p className='opacity-50 line-through'>₹{item?.product?.price}</p>
                    <p className='text-green-600 font-semibold'>
                    {item?.product?.discountPercent}% Off</p>
                </div>
            </div>

        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton onClick={()=>handleUpdateCartItem(-1)} 
                    disabled={item?.quantity<=1}>
                        <RemoveCircleOutlineIcon/>
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>{item?.quantity}</span>
                    <IconButton onClick={()=>handleUpdateCartItem(1)}>
                        <AddCircleOutlineIcon/>
                    </IconButton>
                    
                </div>
                <div>
                    <Button onClick={handleRemoveCartItem}>remove</Button>
                </div>
        </div>
    </div>
  )
}

export default CartItem
