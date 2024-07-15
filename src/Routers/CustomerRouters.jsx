import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation'
import Product from '../customer/components/Product/Product'
import Footer from '../customer/components/Footer/Footer'
import Watch from '../customer/components/Watch/Watch'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import CheckOut from '../customer/components/CheckOut/CheckOut'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation/>
      </div>
      <Routes>
        <Route path='/login' element={<HomePage/>}></Route>
        <Route path='/register' element={<HomePage/>}></Route>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/women/accessories/watch'element={<Watch/>}></Route>
        <Route path='/men/clothing/mens_tees' element={<Product/>}></Route>
        {/* <Route path='/men/clothing/shirt' element={<ShirtMen/>}></Route> */}
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>
        <Route path='/checkout' element={<CheckOut/>}></Route>
        <Route path='/account/order' element={<Order/>}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
        <Route path='/men/accessories/'element={<Watch/>}></Route>
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default CustomerRouters
