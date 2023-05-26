import React from 'react'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'

export const Home = () => {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <Header/>
      <Footer/>
    </div>
  )
  } 
