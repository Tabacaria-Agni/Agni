import { createContext, useState } from "react";
import { iProduct } from "./ProductsContext";

export const CartContext = createContext({} as iCartContext)

interface iCartContext{
  cart: iProduct[]
  setCart: React.Dispatch<React.SetStateAction<iProduct[]>>
  totalValue: number
  setTotalValue: React.Dispatch<React.SetStateAction<number>>
}

interface iProviderPros{
  children: React.ReactNode
}

export const CartProvider = ({children}: iProviderPros) => {
    const [cart, setCart] = useState<iProduct[]>([])
    const [totalValue, setTotalValue] = useState(0)
  
    return(
      <CartContext.Provider value={{cart, setCart, totalValue, setTotalValue}}>
        {children}
      </CartContext.Provider>
    )
  }