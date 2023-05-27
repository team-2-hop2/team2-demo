import React from 'react'
import logo from './Logo dan tsagaan.png'
import cartIcon from './CartIcon.png'
import profIcon from './profIcon.png'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";



export const Header = () => {
  const navigate = useNavigate();



  return (
    <div className='w-auto  bg-blue flex items-center justify-between px-3' >
      <img alt='' src={logo} className='h-[100px]' />
      <div className='flex gap-1'>
        <PersonIcon className='text-white '  />
        <ShoppingCartIcon className='text-white cursor-pointer' onClick={()=> navigate("/Cart")} />
      </div>
    </div>
  )
}
