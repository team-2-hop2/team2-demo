import React from 'react'
import { OrderInfo } from '../section/Cart/OrderInfo'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'

export const CartPay = () => {
  return (
    <div>
      <Header/>
      <div className='sm:w-[100vw] flex justify-center'>
          <OrderInfo/>
      </div>
      <Footer/>
    </div>
  )
}
