import { Box,Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../State/Order/Action";
import { useNavigate } from "react-router-dom";

const DeliveryAddressForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector(store=>store)
  const [selectedAddress, setSelectedAdress] = useState(null);

  console.log("auth data == ",auth.user);

    const handleSubmit = (e)=>{
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const address = {
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            streetAddress:data.get("address"),
            city:data.get("city"),
            state:data.get("state"),
            zipCode:data.get("zip"),
            phoneNumber:data.get("phoneNumber")
        }

        console.log("address",address);

        const orderData = {address,jwt,navigate}
        console.log("address===",orderData);
        dispatch(createOrder(orderData));
        //handleNext();
    }

    const handleCreateOrder = (item) => {
      dispatch(createOrder({ address:item, jwt, navigate }));
      //handleNext();
    };
    
  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className="mt-8 border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
        {auth?.user?.address?.map((item) => (
            <div
              onClick={() => setSelectedAdress(item)}
              className="p-5 py-7 border-b cursor-pointer"
            >
              {" "}
              <AddressCard address={item} />
              {selectedAddress?.id === item.id && (
                <button
                onClick={()=>handleCreateOrder(item)}
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black-300 focus:ring-offset-2"
              >
                Delivere Here
              </button>
              )}
            </div>
          ))}
        </Grid>

        <Grid item xs={12} lg={7}>
            <Box className="border rounded-s-md shadow-md p-5">
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>

                        <Grid item xs={12} sm={6}>
                            <TextField 
                            required
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            fullWidth
                            autoComplete="given-name"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField 
                            required
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            fullWidth
                            autoComplete="given-name"
                            />
                        </Grid>

                        <Grid item xs={12} >
                            <TextField 
                            required
                            id="address"
                            name="address"
                            label="Address"
                            fullWidth
                            multiline
                            rows={4}
                            autoComplete="given-name"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField 
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="given-name"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField 
                            required
                            id="state"
                            name="state"
                            label="State/Province/Region"
                            fullWidth
                            autoComplete="given-name"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField 
                            required
                            id="zip"
                            name="zip"
                            label="Zip/Postal Code"
                            fullWidth
                            autoComplete="shipping postal-code"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField 
                            required
                            id="phoneNumber"
                            name="phoneNumber"
                            label="Phone Number"
                            fullWidth
                            autoComplete="given-name"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <button
                                type="submit"
                                className=" flex  items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black-300 focus:ring-offset-2"
                                >
                                Deliver Here
                            </button>
                        </Grid>

                    </Grid>
                </form>
            </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
