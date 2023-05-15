import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { ProductCard } from '../productCard/ProductCard';

export const ProductList = () => {
  const [data, setData] = useState()


  useEffect(() => {
    axios.get("http://localhost:8000/products", {
    })
    .then((response) => {
      console.log("=====>", response.data.data);
      setData(response.data.data)
    })
    .catch((error) => {
      console.log(error);
    });
  },[]);  


  return (
    <div>
      {data?.map((item, i) => {
        return <ProductCard key={i} data={item} />
      })}

    </div>
  )
}
 