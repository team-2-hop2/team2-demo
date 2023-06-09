import React from 'react'
import { OrderInfo } from '../section/Cart/OrderInfo'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'

export const CartPay = () => {
  return (
    <div className='h-auto flex flex-col gap-5'>
      <Header/>
      <div className='sm:w-full flex justify-center'>
          <OrderInfo/>
      </div>
      <Footer/>
    </div>
  )
}
