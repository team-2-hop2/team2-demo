import React from "react";
import { OrderInfo } from "../section/Cart/OrderInfo";
import { CartList } from "../components/cartList/CartList";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

export const CartPage = () => {
  return (
    <div className="h-auto flex flex-col gap-5">
      <Header/>
      <div className="w-full flex justify-evenly">
        <CartList/>
        <OrderInfo className="hidden lg:flex" />
      </div>
      <Footer/>
    </div>
  );
};
