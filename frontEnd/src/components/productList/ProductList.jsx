import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { ProductCard } from '../productCard/ProductCard';

export const ProductList = (myOnClick) => {
  const [data, setData] = useState()


  useEffect(() => {
    const getProducts = async () => {
      console.log('getProd')
      await axios.get("http://localhost:3333/products")
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
    <div onClick={myOnClick}>
      {data?.map((item, i) => {
        return <ProductCard key={i} data={item} />
      })}

    </div>
  )
}
 