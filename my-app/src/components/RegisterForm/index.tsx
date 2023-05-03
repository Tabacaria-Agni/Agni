import { SubmitHandler, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"

import { StyledRegisterForm } from "./style"
import { registerFormSchema, TRegisterValues } from "./registerFormSchema"

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

    const submit: SubmitHandler<TRegisterValues> = (data) => {
        console.log(data)
    }


    return(
        <StyledRegisterForm>
            <div>
                <h3>Cadastro</h3>
                <Link to="/">Voltar</Link>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                {/* <label htmlFor="name">Nome</label>
                <input placeholder="Insira seu nome" name="name" type="text" {...register("name")} />

                <label htmlFor="email">E-mail</label>
                <input placeholder="Insira seu email" name="email" type="text" {...register("email")} />

                <label htmlFor="date">Data de nascimento</label>
                <input name="date" type="date" {...register("date")} />

                <label htmlFor="password">Senha</label>
                <input placeholder="Insira sua senha" name="password" type="password" {...register("password")} />

                <label htmlFor="confirm">Confirme sua senha</label>
                <input placeholder="Confirme sua senha" name="confirm" type="password" {...register("confirm")} /> */}

                <button type="submit">Cadastrar</button>
            </form>
        </StyledRegisterForm>
    )
}