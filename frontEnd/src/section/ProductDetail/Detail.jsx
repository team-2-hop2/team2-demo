import React, { useState } from 'react'
import ImageSlider from '../../components/imageSlider/ImageSlider';
import { useDataContext } from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const products = {
  image : ["https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880", "https://nb.scene7.com/is/image/NB/mt21540ag_nb_72_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880"]
}
export const Detail = () => {
  const {detailData, setDetailData, cartData, setCartData} = useDataContext();
  const navigate = useNavigate()

  const [size, setSize] = useState('')
  const [ image,  setImage ] = useState('')


  const handle = async () => {
    await axios.post("http://localhost:8000/cartInfo",{
      name:detailData.name,
      size: size,
      count: 1,
      image: detailData.image[0],
      price:detailData.price,
      id: 1,
    }).then( navigate("/"))

  }



  return (
    <div className=' flex flex-col lg:flex-row bg-bgColor w-[370px] sm:w-[600px] md:w-[750px]  lg:w-[1000px] lg:h-[550px] xl:w-[1250px] xl:h-[680px] 2xl:w-[1500px] 2xl:h-[800px] rounded-[20px] items-center overflow-hidden pt-2 lg:justify-between p-6'>
      <div>
        <ImageSlider slides={detailData.image}/>
      </div>
      <div className='flex flex-col lg:h-[470px] xl:h-[620px] 2xl:h-[400px] 2xl:justify-between 2xl:self-start 2xl:pt-8 '>
        <div className='flex flex-col w-[350px] sm:w-[580px] md:w-[720px] lg:w-[480px] xl:w-[580px] 2xl:w-[680px]'>
          <p className='font-[Shantell] text-[30px] 2xl:text-5xl 2xl:mb-2' >{detailData.name}</p>
          <p className='font-[Shantell] text-[20px] 2xl:text-3xl mb-5'>Үнэ : {detailData.price}₮</p>
          <div className='h-[1px] bg-[#d9d9d9] w-[350px] sm:w-[580px] md:w-[720px] lg:w-[400px] xl:w-[500px] 2xl:w-[500px]'></div>
        </div>  
        <div className='w-[350px] sm:w-[580px] md:w-[720px] lg:w-[480px] xl:w-[580px] 2xl:[680px] h-[250px] pt-3 pb-3 flex justify-between flex-col'>
          <div className='flex items-center w-full row-span-3 gap-x-3'>
              <p className='font-[Shantell] 2xl:text-2xl'>Хэмжээ :</p>
              {detailData.size.map((item, index) => {
                  return <button key={index} className={`${item === size ? "bg-purple text-black font-[Shantell] 2xl:text-2xl p-1 rounded-[10px]" : "hover:bg-purple 2xl:text-2xl  text-black font-[Shantell] p-1 rounded-[10px]"}`} onClick={ () => setSize(item)}>{item}</button>
              })}
          </div>
          {/* <div className='flex items-center w-full row-span-3 gap-x-3'>
              <p className='font-[Shantell] 2xl:text-2xl'>Өнгө :</p>
              {products.color.map((item, index) => {
                const border = `${item === color ? 'border-solid border-purple  border-4' : ' '}` 
                return (
                  <button className={`h-9 w-9 bg-[${item}] rounded-[50%] ${border}`} key={index} onClick={() => setColor(item)}></button>
                )
              })}
          </div> */}
          <div className='flex items-center w-full row-span-3 gap-x-3'>
              <p className='font-[Shantell] 2xl:text-2xl'>Зураг :</p>
              {products.image?.map((item, index) => {
                return <img alt='' src={item} className={`${item === image ? "border-solid  border-purple border-4 w-[60px] h-[60px] object-cover" : "w-[60px] h-[60px] object-cover"}`} onClick={() => setImage(item)}/>
              })}
          </div>
          <div>
            <button className='bg-pink font-[Shantell] w-[350px] sm:w-[580px] md:w-[720px] 2xl:text-2xl rounded-[10px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px]lg:self-center hover:bg-bgColor border-solid border-pink border-2' onClick={()=> handle()} >Сагслах</button>
          </div>
        </div>
      </div>

    </div>
  )
}
