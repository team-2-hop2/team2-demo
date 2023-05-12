import React from "react";
import { OrderInfo } from "../section/Cart/OrderInfo";
import { CartList } from "../components";

export const CartPage = () => {
  return (
    <div className="w-[100%] flex justify-evenly pl-5 gap-5">
      <CartList />
      <OrderInfo className="hidden lg:flex" />
    </div>
  );
};
