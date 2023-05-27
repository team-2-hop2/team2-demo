import React from 'react';
import {CartPage, Home, ProductDetail} from './pages'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { CartPay } from './pages/CartPay';
import { Handle } from './context/Context';


const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>,
  },
  {
    path:'/productDetail',
    element: <ProductDetail/>,
  },
  {
    path:'/Cart',
    element:<CartPage/>
  },
  {
    path:'/CartPay',
    element:<CartPay/>
  }
])

function App() {
  return (
    <Handle>
      <RouterProvider router={router} />
    </Handle>
  );
}

export default App;