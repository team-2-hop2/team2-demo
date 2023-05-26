import React from "react";
import { CartItem } from "./CartItem";
import { useState } from "react";
import { Link } from "react-router-dom";

export const CartList = (key) => {
  const products_mock = [
    {
      ner: "Half Zip shirt",
      size: "160",
      count: 3,
      price: 155000,
      id: 1,
    },
    {
      ner: "Half Zip shirt",
      size: "170",
      count: 4,
      price: 155000,
      id: 2,
    },
    {
      ner: "Half Zip shirt",
      size: "130",
      count: 2,
      price: 155000,
      id: 3,
    },
    {
      ner: "Full zip jacket",
      size: "150",
      count: 1,
      price: 155000,
      id: 4,
    },
  ];
  const [data, setData] = useState(products_mock);

  function handleChange(id, isIncrease) {
    console.log(id, isIncrease);
    if (isIncrease) {
      let newdata = data.map((e) => {
        if (e.id === id) {
          return {
            ner: e.ner,
            size: e.size,
            count: e.count + 1,
            price: e.price,
            id: e.id,
          };
        }
        return e;
      });
      console.log(newdata);
      setData([...newdata]);
    } else {
      let newdata = data.map((e) => {
        if (e.id === id) {
          return {
            ner: e.ner,
            size: e.size,
            count: e.count - 1,
            price: e.price,
            id: e.id,
          };
        }
        return e;
      });
      setData([...newdata]);
    }
  }

  return (
    <div className="min-w-min" key={key}>
      <div className="font-[Shantell] text-3xl">Миний сагс</div>
      <div className="w-[100%] p-4 bg-bgColor border-gray-200 shadow rounded-xl lg:w-[50vw] mt-5 sm:w-[70vw] md:flex flex-col justify-center">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-[Shantell] leading-none text-gray-900 ">
            Бүтээгдэхүүн нэр
          </h5>
          <a href="#" className="text-xl font-[Shantell] text-blue-600">
            Тоо ширхэг
          </a>
          <a href="#" className="text-xl font-[Shantell] text-blue-600">
            Нийт үнэ
          </a>
        </div>
        <div className="flow-root">
          <ul role="list">
            {data.map((element, i) => (
              <CartItem el={element} key={i} handleChange={handleChange} />
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/CartPay">
          <button className="w-[300px] bg-pink font-[Shantell] border rounded-2xl mt-10 lg:hidden xl:hidden 2xl:hidden">
            Захиалах
          </button>
        </Link>
      </div>
    </div>
  );
};
