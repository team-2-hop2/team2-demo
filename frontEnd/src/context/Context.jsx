import { createContext, useState } from "react";
import { useContext } from "react";
export const Context = createContext();

export function Handle({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [detailData, setDetailData] = useState()
  const [cartData, setCartData] = useState()
  return (
    <Context.Provider
      value={{
        isOpen,
        setIsOpen,
        detailData,
        setDetailData,
        cartData,
        setCartData,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export const useDataContext = () => useContext(Context);