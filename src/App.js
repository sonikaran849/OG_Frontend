import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './customer/components/Cart/Cart';
import CheckOut from './customer/components/CheckOut/CheckOut';
import Footer from './customer/components/Footer/Footer';
import './customer/components/Navigation/Navigation';
import Navigation from './customer/components/Navigation/Navigation';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import HomePage from './customer/pages/HomePage/HomePage';
import CustomerRouters from './Routers/CustomerRouters';
import Watch from './customer/components/Watch/Watch';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>



      <div>
        {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <CheckOut/> */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
      </div>

    </div>
  );
}

export default App;
