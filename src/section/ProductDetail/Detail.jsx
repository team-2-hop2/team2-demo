import React, { useState } from 'react'
import hoodie from '../../hoodie.png';

const products = {
  size : ['130', '140', '150'],
  color :[ "red" , "yellow", "green", 'black'],
  image : ["https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880", "https://nb.scene7.com/is/image/NB/mt21540ag_nb_72_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880"]
}
export const Detail = () => {

  const [size, setSize] = useState('')
  const [color, setColor] = useState('red')
  const [ image,  setImage ] = useState('')

  const a = 50000

  return (
    <div className=' flex flex-col lg:flex-row bg-bgColor w-[370px] sm:w-[600px] md:w-[750px] lg:w-[1000px] lg:h-[550px] xl:w-[1250px] xl:h-[680px] rounded-[20px] items-center overflow-hidden pt-2 lg:justify-between p-6'>
      <img alt='' src={hoodie} className='w-[350px] sm:w-[580px] md:w-[720px] lg:w-[380px] xl:w-[490px] h-[400px] xl:h-[600px] object-cover rounded-[20px] ' />
      <div className='flex flex-col lg:h-[400px] xl:h-[600px]'>
        <div className='flex flex-col w-[350px] sm:w-[580px] md:w-[720px] lg:w-[480px] xl:w-[580px] '>
          <p className='font-[Shantell] text-[30px] ' >Name</p>
          <p className='font-[Shantell] text-[20px] '>Үнэ : {a}₮</p>
        </div>  
        <div className='h-[1px] bg-[#d9d9d9] w-[350px] sm:w-[580px] md:w-[720px] lg:w-[480px] xl:w-[580px]'></div>
        <div className='w-[350px] sm:w-[580px] md:w-[720px] lg:w-[480px] xl:w-[580px] h-[250px] pt-3 pb-3 flex justify-between flex-col'>
          <div className=' w-full row-span-3 gap-x-3 flex items-center '>
              <p className='font-[Shantell]'>Хэмжээ :</p>
              {products.size.map((item, index) => {
                  return <button key={index} className={`${item === size ? "bg-purple text-black font-[Shantell] p-1 rounded-[10px]" : "hover:bg-purple  text-black font-[Shantell] p-1 rounded-[10px]"}`} onClick={ () => setSize(item)}>{item}</button>
              })}
          </div>
          <div className=' w-full row-span-3 gap-x-3 flex items-center '>
              <p className='font-[Shantell]'>Өнгө :</p>
              {products.color.map((item, index) => {
                console.log(item)
                  // return <button key={index} className={`${item === color ? `  w-9 h-9 bg-[${item}] p-1 rounded-[50%] border-solid  border-purple border-4`  : `  w-9 h-9 bg-[${item}] p-1 rounded-[50%]`}`} onClick={() => setColor(item)}></button>
                  // return <button key={index} className={`bg-[${item}]`} onClick={() => setColor(item)}></button>
                  // <button key={index} className={`w-9 h-9 rounded bg-[${item}]`} onClick={() => setColor(item)}></button>
                  return <div className={`bg-[${item}]`}>{item}</div>
              })}
          </div>
          <div className=' w-full row-span-3 gap-x-3 flex items-center '>
              <p className='font-[Shantell]'>Зураг :</p>
              {products.image.map((item, index) => {
                return <img alt='' src={item} className={`${item === image ? "border-solid  border-purple border-4 w-[60px] h-[60px] object-cover" : "w-[60px] h-[60px] object-cover"}`} onClick={() => setImage(item)}/>
              })}
          </div>
          <div>
            <button className='bg-pink font-[Shantell] w-[350px] sm:w-[580px] md:w-[720px] rounded-[10px] lg:w-[400px] xl:w-[500px] lg:self-center hover:bg-bgColor border-solid border-pink border-2' >Сагслах</button>
          </div>
        </div>
      </div>

    </div>
  )
}
