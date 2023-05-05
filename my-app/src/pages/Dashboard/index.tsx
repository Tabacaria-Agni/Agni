import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { CartProduct } from "../../components/CartProduct"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { LiProducts } from "../../components/LiProducts"
import { CartContext } from "../../providers/CartContext"
import { iProduct, ProductsContext } from "../../providers/ProductsContext"
import { UserContext } from "../../providers/UserContext"
import { StyledDashboardMain } from "./style"

export interface iLiProductProps{
    item: iProduct
    id: number
    name: string
    price: number
    image: string
    category: string
}

export const Dashboard = () => {
    const navigate = useNavigate()
    const {products, populateProducts,categories, setCategories, valueInput, setValueInput, searchProducts, filteredArray, filteredCategories, setFilteredArray} = useContext(ProductsContext)
    const {cart, setCart} = useContext(CartContext)
    const {totalValue, setTotalValue} = useContext(CartContext)
    const {logoutUser, setMesage} = useContext(UserContext)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        if(!token){
            navigate("/")
        }
        else if(token){
            populateProducts()
            setMesage(false)
        }
    },[])

    const clearCart = () => {
        setTotalValue(0)
        setCart([])
        toast.success("Carrinho limpo com sucesso", {autoClose:2500})
    }

    const filteredFunction = (value:any) =>{
        filteredCategories(value.target.id)
    }


    return(
        <StyledDashboardMain>
            <Header />
            <button onClick={()=> logoutUser()} id="buttonLogout"><img src="logout.png"/></button>
            <span id="filterLabel">
                <h3 className="titleFilterLabel">Procura algo mais especifico?</h3>
                <button onClick={()=> setModal(true)} className="buttonCart"><img src="CartLogo.png" /></button>
            </span>

            <div className="divFilters">
                <button onClick={()=> setFilteredArray([])} className="center" id="clear"></button>
                <button id="readyToUse" onClick={(event)=> filteredFunction(event)} className="center"></button>
                <button id="body" onClick={(event)=> filteredFunction(event)} className="center"></button>
                <button id="hose" onClick={(event)=> filteredFunction(event)} className="center"></button>
                <button id="vase" onClick={(event)=> filteredFunction(event)} className="center"></button>
                <button id="rosh" onClick={(event)=> filteredFunction(event)} className="center"></button>
                <button id="plate" onClick={(event)=> filteredFunction(event)} className="center"></button>
                <button id="essence" onClick={(event)=> filteredFunction(event)} className="center"></button>
                <button id="accessories" onClick={(event)=> filteredFunction(event)} className="center"></button>
            </div>

            <span id="productsLabel">
                <h2 className="titleProductsLabel">Produtos</h2>
                <input placeholder="Pesquise por um produto..." onChange={(event)=> searchProducts(event?.target.value)} type="text" />
            </span>
            <ul className="productList">
              
                {
                    filteredArray.length ? filteredArray.map((item)=>{
                        return(
                            <LiProducts key={item.id} item={item} id={item.id} name={item.name} price={item.price} image={item.image} category={item.category} />
                        )
                    })
                    :
                    products.map((item)=>{
                        return(
                            <LiProducts key={item.id} item={item} id={item.id} name={item.name} price={item.price} image={item.image} category={item.category} />
                        )
                    })
                }
            </ul>
            <Footer />
            {
                modal ? (
                    <div id="divContainer">
                    <div id="overlay"></div>
                    <div id="modalContainer">
                        <header id="headerModal">
                            <h3 className="headerTitleModal">Carrinho</h3>
                            <button onClick={() => setModal(false)} className="modalClose">x</button>
                        </header>
                        <div className="cartContainer">
                        {
                            cart.length ? cart.map((item) =>{
                                return(
                                    <CartProduct item={item} image={item.image} name={item.name} />
                                )
                            })
                            :
                            <div id="cartEmpty">
                                <h3>Sacola Vazia</h3>
                                <p>Adicione itens</p>
                            </div>
                        }
                        </div>
                        {
                            cart.length ? 
                            <>
                                <span className="spanTotalValue">
                                    <p className="TitleTotalValue">Total</p>
                                    <p className="totalValue">R${totalValue}</p>
                                </span>
                                <button onClick={()=> clearCart()} className="cartClear">Remover Todos</button>
                            </>
                            :
                            <></>
                        }
                    </div>
                    
                </div>
                )
                :
                <></>
            }
        </StyledDashboardMain>
    )
}