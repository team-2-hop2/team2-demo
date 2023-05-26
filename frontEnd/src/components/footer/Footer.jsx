import React from 'react'
import logo from './Logo dan tsagaan.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
  return (
    <div className='bg-blue flex flex-col items-center gap-10 w-screen'>
      <div className='lg:flex lg:justify-around lg:w-screen lg:items-center'>
        <div className='flex  items-center'>
          <img alt='' src={logo} className='h-[100px]' />
          <FacebookIcon className='text-white cursor-pointer' onClick={ () => window.open("https://www.facebook.com/Terskhenbrand", "_blank")  } />
          <InstagramIcon className='text-white'/>
        </div>
        <div className='flex flex-col pl-8 gap-1'>
          <p className='font-[Shantell] text-center text-[white]'>ХОЛБОО БАРИХ</p>
          <p className='font-[Shantell] text-[white]'>Утас: 76099393</p>
          <p className='font-[Shantell] text-[white]'>И-мэйл хаяг: the93kidult@gmail.com</p>
        </div>
      </div>
      <p className='font-[Shantell] text-[white]'>2023 © TERSKHEN KID'S BRAND</p>

    </div>
  )
}
