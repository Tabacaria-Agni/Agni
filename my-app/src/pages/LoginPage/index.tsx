import { useContext, useEffect } from "react"
import { useForm } from "react-hook-form"
import { UserContext } from "../../providers/UserContext"
import { LoginSchema, TLoginFormValue } from "../../schema/loginSchema"
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { StyledLoginPage } from "./style";
import loginImg from "../../assets/loginImg.jpeg"

export const LoginPage = () => {
    const {loginSubmit} = useContext(UserContext)
    const navigate = useNavigate()
    const  {register, handleSubmit, formState: {errors}} = useForm<TLoginFormValue>({
        resolver: zodResolver(LoginSchema)
    })

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        if(token){
            navigate("/dashboard")
        }
    },[])

    const submit = (data: TLoginFormValue) => {
        loginSubmit(data)
    }

    return(
        <>
            <Header />
                <StyledLoginPage>

                <div className="imgContainer">
                    <img src={loginImg} alt="loginImg" className="loginImg"/>
                </div>
                <div className="divFormContainer">
                    <h2 className="loginTitle">Login</h2>
                    <form onSubmit={handleSubmit(submit)} className="formContainer">
                        <div className="divInputLogin">
                            <p className="labelInput">E-mail</p>
                            <input className="inputLogin" type="email" {...register("email")} placeholder="Insira seu e-mail"/>
                        </div>
                        <div className="divInputLogin">
                            <p className="labelInput" >Senha</p>
                            <input className="inputLogin" type="password" {...register("password")} placeholder="Senha... "/>
                        </div>
                        
                        <button className="buttonLogin" type="submit" >Login</button>
                        <p className="formMesage">Ainda não possui uma conta ?</p>
                        <button className="buttonRegister" type="button" onClick={() => navigate("/register") }>Cadastrar</button>
                        
                    </form>
                </div>
                    <ToastContainer theme="dark" />
                </StyledLoginPage>

            <Footer />
        </>

    )
}