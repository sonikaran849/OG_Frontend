import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid ,Button} from '@mui/material'
import { deepPurple } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../../State/Order/Action';
import BackdropComponent from '../BackDrop/BackDrop';


const OrderDetails = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { orderId } = useParams();
  const { order } = useSelector((store) => store);
  const navigate = useNavigate();
  console.log("order", order.order);

  useEffect(() => {
    dispatch(getOrderById(orderId));
  },[]);


  return (
    <>
     {!order.loading && <div className=" px-2 lg:px-36 space-y-7 ">
      <Grid container className="p-3 shadow-lg">
        <Grid xs={12}>
          <p className="font-bold text-lg py-2">Delivery Address</p>
        </Grid>
        <Grid item xs={6}>
          <AddressCard address={order.order?.shippingAddress} />
        </Grid>
      </Grid>
      <Box className="p-5 shadow-lg border rounded-md">
        <Grid
          container
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid item xs={9}>
            <OrderTracker
              activeStep={
                order.order?.orderStatus === "PLACED"
                  ? 1
                  : order.order?.orderStatus === "CONFIRMED"
                  ? 2
                  : order.order?.orderStatus === "SHIPPED"
                  ? 3
                  : 5
              }
            />
          </Grid>
          <Grid item>
           {order.order?.orderStatus==="DELIVERED" && <Button sx={{ color: ""}} color="error" variant="text" >
              RETURN
            </Button>}

            {order.order?.orderStatus!=="DELIVERED" && <button
                    type="submit"
                    className=" flex w-[10rem] h-[3rem] items-center mr-3 rounded-md border border-transparent bg-black px-8 pl-5 text-base font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black-300 focus:ring-offset-2"
                >
                    Cancel Order
            </button>}
          </Grid>
        </Grid>
      </Box>

    

      <Grid container className="space-y-5">
        {order.order?.orderItems.map((item) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              {" "}
              <div className="flex  items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item?.product?.imageUrl}
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="">{item?.product?.title}</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: pink</span> <span>Size: {item?.size}</span>
                  </p>
                  <p>Seller: {item?.product?.brand}</p>
                  <p>₹{item?.discountedPrice} </p>
                </div>
              </div>
            </Grid>
            <Grid item>
              {
                <Box
                  sx={{ color: 'black' }}
                  onClick={() => navigate(`/account/rate/${item.product._id}`)}
                  className="flex items-center cursor-pointer"
                >
                  <StarIcon
                    sx={{ fontSize: "2rem" }}
                    className="px-2 text-5xl"
                  />
                  <span>Rate & Review Product</span>
                </Box>
              }
            </Grid>
          </Grid>
        ))}
      </Grid>

     
    </div>}
     <BackdropComponent open={order.loading}/>
    </>
  )
}

export default OrderDetails

{/* <div className='px-5 lg:px-20'>
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
    </div> */}