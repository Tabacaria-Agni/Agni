import { SubmitHandler, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"

import { StyledRegisterForm } from "./style"
import { registerFormSchema, TRegisterValues } from "./registerFormSchema"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

interface iRegisterData{
    name: string
    email: string
    date: string 
    password: string
}

export const RegisterForm = () =>{

    const { register, handleSubmit, formState: {errors}} = useForm<TRegisterValues>({
        resolver: zodResolver(registerFormSchema)
    })

    const {registerSubmit} = useContext(UserContext)

    const submit = (data: TRegisterValues) => {
        registerSubmit(data)
    }


    return(
        <StyledRegisterForm>
            <div>
                <h3>Cadastro</h3>
                <Link to="/">Voltar</Link>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <label htmlFor="name">Nome</label>
                <input placeholder={errors.name?.message || "Insira seu nome"} type="text" {...register("name")} />

                <label htmlFor="email">E-mail</label>
                <input placeholder={errors.email?.message || "Insira seu email"} type="text" {...register("email")} />

                <label htmlFor="date">Data de nascimento</label>
                <input type="date" {...register("date")} />

                <label htmlFor="password">Senha</label>
                <input placeholder={errors.password?.message || "Insira sua senha"} type="password" {...register("password")} />

                <label htmlFor="confirm">Confirme sua senha</label>
                <input placeholder={errors.confirm?.message || "Confirme sua senha"} type="password" {...register("confirm")} />

                <button type="submit">Cadastrar</button>
            </form>
        </StyledRegisterForm>
    )
}