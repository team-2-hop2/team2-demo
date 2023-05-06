import React, { useState } from 'react'
import hoodie from '../hoodie.png'
export const ProductCard = () => {
  const [checkedOne,  setCheckedOne] = useState(false)
  const [checkedTwo,  setCheckedTwo] = useState(false)
  const [checkedTri,  setCheckedTri] = useState(false)

  const product_mock = {
    name: '',
    size: ['130','140','150'],
    price: 222,
  }
  const handleOne = () => {
    setCheckedOne(!checkedOne)
    setCheckedTwo(false)
    setCheckedTri(false)
  }
  const handleTwo = () => {
    setCheckedOne(false)
    setCheckedTwo(!checkedTwo)
    setCheckedTri(false)
  }
  const handleTri = () => {
    setCheckedOne(false)
    setCheckedTwo(false)
    setCheckedTri(!checkedTri)
  }
   
  const a = '50000'
  return (
    <div>
    <div className='flex flex-col mx-auto w-[165px] sm:w-[200px] md:w-[240px] 2xl:w-[280px] 2xl:h-[350px] bg-bgColor rounded-[20px] overflow-hidden  justify-between '>
      <img alt='' src={hoodie} className='object-cover h-[150px]'/> 
      <div className='p-3 flex flex-col h-[150px] 2xl:h-[200px] justify-between px-2'>
        <p className='font-[Shantell] text-start w-full 2xl:text-[25px] font-thin'>Name</p> 
        <p className='font-[Shantell]'>Хэмжээ :</p>
        <div className=' w-full row-span-3 gap-x-3 flex items-center '>
          <button className={`${checkedOne ? "bg-purple text-black font-[Shantell] p-1 rounded-[10px]" : "hover:bg-purple  text-black font-[Shantell] p-1 rounded-[10px]"}`} onClick={handleOne}>130</button>
          <button className={`${checkedTwo ? "bg-purple text-black font-[Shantell] p-1 rounded-[10px]" : "hover:bg-purple  text-black font-[Shantell] p-1 rounded-[10px]"}`} onClick={handleTwo}>140</button>
          <button className={`${checkedTri ? "bg-purple text-black font-[Shantell] p-1 rounded-[10px]" : "hover:bg-purple  text-black font-[Shantell] p-1 rounded-[10px]"}`} onClick={handleTri}>150</button>
        </div>
        <p className='font-[Shantell]'>Үнэ : {a}₮</p>
        <button className='bg-pink font-[Shantell] w-50 rounded-[10px] hover:bg-bgColor border-solid border-pink border-2' >Сагслах</button>
      </div>
    </div>
    </div>
  )
}
