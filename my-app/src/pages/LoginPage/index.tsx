import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { useContext, useEffect } from "react"
import { useForm } from "react-hook-form"
import { UserContext } from "../../providers/UserContext"
import { LoginSchema, TLoginFormValue } from "../../schema/loginSchema"
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

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
                <div className="bodyLoginPage">
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
                    <ToastContainer theme="dark" />
                </div>
            <Footer />
        </>
    )
}