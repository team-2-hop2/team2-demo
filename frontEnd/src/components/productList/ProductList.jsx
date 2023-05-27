import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { ProductCard } from '../productCard/ProductCard';

export const ProductList = (myOnClick) => {
  const [data, setData] = useState()


  useEffect(() => {
    const getProducts = async () => {
      await axios.get("http://localhost:8000/products")
      .then((response) => {
        console.log("=====>", response.data.data);
        setData(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
    }
    getProducts()
  },[]);  


  return (
    <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-4 p-4'>
      {data?.map((item, i) => {
        return <ProductCard key={i} data={item} />
      })}

    </div>
  )
}
 