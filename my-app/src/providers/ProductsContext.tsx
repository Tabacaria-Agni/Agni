import { createContext, useState } from "react";
import { api } from "../services/api";

export const ProductsContext = createContext({} as iProductsContext)

interface iProductsContext{
  populateProducts: () => Promise<void>
  products: iProduct[]
  setValueInput: React.Dispatch<React.SetStateAction<string>>
  valueInput: string
  searchProducts: (event: any) => Promise<void>
  filteredArray: iProduct[]
  categories: iCategory[]
  setCategories: React.Dispatch<React.SetStateAction<iCategory[]>>
  filteredCategories: ( value : string) => void
  setFilteredArray: React.Dispatch<React.SetStateAction<iProduct[]>>
}

export interface iProduct{
  id: number
  name: string
  price: number
  image: string
  category: string
}

interface iCategory{
  category: string
}

interface iProviderPros{
  children: React.ReactNode
}

export const ProductsProvider = ({children}: iProviderPros) => {
  const [products, setProducts] = useState<iProduct[]>([])
  const [categories, setCategories] = useState<iCategory[]>([])
  const [valueInput, setValueInput] = useState("")
  const [filteredArray, setFilteredArray] = useState<iProduct[]>([])

  const filterName = products.filter(item => item.name.toLowerCase().includes(valueInput.toLowerCase()))

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

  const searchProducts = async (event: string) => {
    setValueInput(event)
    setFilteredArray(filterName)
  }


  const filteredCategories = (value:string) =>{
    console.log(value)
    const filteredCategories = products.filter((item:iProduct)=> item.category == value)
    setFilteredArray(filteredCategories)
  }


  
  
    return(
      <ProductsContext.Provider value={{filteredCategories, populateProducts, products, categories, setCategories, valueInput, setValueInput, searchProducts, filteredArray, setFilteredArray}}>
        {children}
      </ProductsContext.Provider>
    )
  }