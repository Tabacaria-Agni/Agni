import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { RegisterForm } from "../../components/RegisterForm"
import { StyledRegisterPage } from "./style"

export const RegisterPage = () => {

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