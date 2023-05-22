import React, { useState } from 'react'
import sarfan from '../../sarfan.jpg'
export const ProductCard = ({data}) => {

  console.log(data)

  const product_mock = {
    name: '',
    size: ['130','140','150'],
    price: 222,
  }
  const [size, setSize] = useState('')

      
  return (
    <div>
    <div className='flex flex-col mx-auto w-[165px] sm:w-[200px] md:w-[240px] 2xl:w-[280px] 2xl:h-[450px] bg-bgColor rounded-[20px] overflow-hidden  justify-between p-1 '>
      <img alt='' src={data.image} className='object-cover h-[250px]  rounded-[20px]'/> 
      <div className='p-2 flex flex-col h-[60px] 2xl:h-[200px] justify-between'>
        <p className='font-[Shantell] text-start w-full 2xl:text-[25px] text-[20px]'>{data.name}</p> 
        {/* <p className='font-[Shantell]'>Хэмжээ :</p> */}
        {/* <div className=' w-full row-span-3 gap-x-3 flex items-center '>
          <button className={`${checkedOne ? "bg-purple text-black font-[Shantell] p-1 rounded-[10px]" : "hover:bg-purple  text-black font-[Shantell] p-1 rounded-[10px]"}`} onClick={handleOne}>130</button>
          <button className={`${checkedTwo ? "bg-purple text-black font-[Shantell] p-1 rounded-[10px]" : "hover:bg-purple  text-black font-[Shantell] p-1 rounded-[10px]"}`} onClick={handleTwo}>140</button>
          <button className={`${checkedTri ? "bg-purple text-black font-[Shantell] p-1 rounded-[10px]" : "hover:bg-purple  text-black font-[Shantell] p-1 rounded-[10px]"}`} onClick={handleTri}>150</button>
        </div> */}
        {/* <div className='flex items-center w-full row-span-3 gap-x-3'>
              {data.size.map((item, index) => {
                  return <button key={index} className={`${item === size ? "bg-purple text-black font-[Shantell]  p-1 rounded-[10px]" : "hover:bg-purple   text-black font-[Shantell] p-1 rounded-[10px]"}`} onClick={ () => setSize(item)}>{item}</button>
              })}
          </div> */}
        <p className='font-[Shantell]'>Үнэ : {data.price}₮</p>
        {/* <button className='bg-pink font-[Shantell] w-50 rounded-[10px] hover:bg-bgColor border-solid border-pink border-2 ' >Сагслах</button> */}
      </div>
    </div>
    </div>
  )
}
