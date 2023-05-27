import { createContext, useState } from "react";
import { useContext } from "react";
export const Context = createContext();

export function Handle({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Context.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export const useDataContext = () => useContext(Context);