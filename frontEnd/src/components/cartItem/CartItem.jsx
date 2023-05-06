import React from "react";
import hoodie from "./hoodie.png";

export const CartItem = ({ el, key, handleChange }) => {
  return (
    <li className="py-3 sm:py-7 min-w-min" key={key}>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 justify-between items-center">
          <img
            className="w-11 h-11 rounded-full"
            src={hoodie}
            alt="Neil image"
          />
          <div>
            <p className="text-sm font-[Shantell] text-gray-900 truncate ">
              {el.ner}
            </p>
            <p className="text-sm  truncate font-[Shantell] ">
              size : {el.size}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex">
            <div className="w-[60px] h-[10px] flex justify-around">
              <button
                onClick={() => handleChange(el.id, false)}
                className="h-[10px] w-[10px] text-center"
              >
                -
              </button>
              <div>{el.count}</div>
              <button onClick={() => handleChange(el.id, true)}>+</button>
            </div>
          </div>
        </div>
        <div className="flex  justify-between  items-center ">
          <div className="items-center text-base font-[Shantell] text-gray-900 ">
            {el.price * el.count}₮
          </div>
        </div>
      </div>
    </li>
  );
};
