import { createContext, useState } from "react";
import { api } from "../services/api";

export const ProductsContext = createContext({} as iProductsContext)

interface iProductsContext{
  populateProducts: () => Promise<void>
  products: iProduct[]
}

export interface iProduct{
  id: number
  name: string
  price: number
  image: string
  category: string
}

interface iProviderPros{
    children: React.ReactNode
}

export const ProductsProvider = ({children}: iProviderPros) => {
  const [products, setProducts] = useState<iProduct[]>([])
      
  const populateProducts = async () => {
    const token = localStorage.getItem("@TOKEN")
    if(token){
      try {
        const { data } = await api.get("/products",{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
  
    return(
      <ProductsContext.Provider value={{populateProducts, products}}>
        {children}
      </ProductsContext.Provider>
    )
  }