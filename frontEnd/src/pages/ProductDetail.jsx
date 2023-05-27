import React from 'react'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import { Detail } from '../section/ProductDetail/Detail'

export const ProductDetail = () => {
  return (
    <div className='h-auto flex flex-col gap-5'>
      <Header/>
      <div className='flex justify-center w-auto'>
        <Detail/>
      </div>
      <Footer/>
    </div>
  )
}
