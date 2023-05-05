import { useContext } from "react"
import { toast } from "react-toastify"
import { iLiProductProps } from "../../pages/Dashboard"
import { CartContext } from "../../providers/CartContext"
import { iProduct } from "../../providers/ProductsContext"
import { StyledLiProducts } from "./style"

export const LiProducts = ({item, category, id, image, name, price}:iLiProductProps) => {

    const {setCart, cart} = useContext(CartContext)
    const {totalValue, setTotalValue} = useContext(CartContext)

    const addCart = (itemParam:iProduct) => {
        toast.success(`${itemParam.name} adicionado ao carrinho`, {autoClose:1500})
        setCart([...cart, itemParam])
        setTotalValue(totalValue + itemParam.price)
    }

    return(
        <StyledLiProducts>
            <img src={image} />
            <p className="productName">{name}</p>
            <p>R${price}</p>
            <button onClick={()=> addCart(item)}>Adicionar ao carrinho</button>
        </StyledLiProducts>
    )
}