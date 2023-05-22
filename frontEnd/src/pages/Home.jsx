import React from 'react'
import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'
import { useDataContext } from '../context/Context';
import { SignIn } from '../section/signIn/SignIn';
import { ProductList } from '../components/productList'
import { Uploader } from '../components/uploader'

export const Home = () => {
  const {isOpen, setIsOpen} = useDataContext();


  return (
    <div className='h-screen flex flex-col justify-between'>
      <Header/>
      {isOpen && (
        <SignIn/>
      )}
      <Footer/>
    </div>
  )
  } 
