import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { RegisterForm } from "../../components/RegisterForm"
import { StyledRegisterPage } from "./style"

export const RegisterPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        if(token){
            navigate("/dashboard")
        }
    },[])


    return(
        <StyledRegisterPage>
            <Header />
                <div className="divContainer">
                    <img className="registerLogo" src="RegisterLogo.png" alt="" />
                    <RegisterForm />
                </div>
            <Footer />
        </StyledRegisterPage>
    )
}