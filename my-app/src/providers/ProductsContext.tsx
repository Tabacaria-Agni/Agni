import { createContext } from "react";

export const ProductsContext = createContext({} as iProductsContext)

interface iProductsContext{

}

interface iProviderPros{
    children: React.ReactNode
}

export const ProductsProvider = ({children}: iProviderPros) => {
      
  
    return(
      <ProductsContext.Provider value={{}}>
        {children}
      </ProductsContext.Provider>
    )
  }