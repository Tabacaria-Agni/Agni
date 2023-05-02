import { createContext } from "react";

export const CartContext = createContext({} as iCartContext)

interface iCartContext{

}

interface iProviderPros{
    children: React.ReactNode
}

export const CartProvider = ({children}: iProviderPros) => {
      
  
    return(
      <CartContext.Provider value={{}}>
        {children}
      </CartContext.Provider>
    )
  }