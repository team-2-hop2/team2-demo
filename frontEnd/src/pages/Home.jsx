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
    <div className='h-auto flex flex-col gap-5'>
      <Header/>
      {isOpen && (
        <SignIn/>
      )}
      <ProductList/>
      <Footer/>
      <Uploader/>
    </div>
  )
  } 
