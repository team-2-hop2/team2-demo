import React from "react";
import { OrderInfo } from "../section/Cart/OrderInfo";
import { CartList } from "../components/cartList/CartList";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

export const CartPage = () => {
  return (
    <div>
      <Header/>
      <div className="w-[100%] flex justify-evenly">
        <CartList />
        <OrderInfo className="hidden lg:flex" />
      </div>
      <Footer/>
    </div>
  );
};
