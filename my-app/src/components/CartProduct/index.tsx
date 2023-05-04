import { useContext } from "react"
import { CartContext } from "../../providers/CartContext"
import { iProduct } from "../../providers/ProductsContext"
import { StyledCartProduct } from "./style"

interface iCartProductProps{
    item: iProduct
    image: string
    name: string
}

export const CartProduct = ({item, image, name}:iCartProductProps) => {
    const {cart, setCart} = useContext(CartContext)
    const {totalValue, setTotalValue} = useContext(CartContext)

    const itemRemove = (itemParam: iProduct) => {
        const arrayFilter = cart.filter((cartItem) => cartItem.id != itemParam.id)
        setCart(arrayFilter)
        setTotalValue(totalValue - itemParam.price)
    }

    return(
        <StyledCartProduct>
            <div>
                <img src={image} />
                <h3>{name}</h3>
            </div>
            <button onClick={()=> itemRemove(item)}>x</button>
        </StyledCartProduct>
    )
}