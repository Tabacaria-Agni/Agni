import { StyledFooter } from "./style"
import { Link, useNavigate } from "react-router-dom"

export const Footer = () => {

    const navigate = useNavigate()
    
    return(
        <StyledFooter>
            <Link to="/" >Login</Link>
            <Link to="/register" >Cadastro</Link>
            <Link to="/about" >Sobre nós</Link>
            <Link to="/" >Politica e transparência</Link>
           
            <p>Contatos: (48)93321-4343</p>
            <p>agniTabacaria@gmail.com</p>
        </StyledFooter>
    )
}