import { createContext, useState } from "react";
import { TLoginFormValue } from "../schema/loginSchema";
import { api } from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { TRegisterValues } from "../components/RegisterForm/registerFormSchema";


interface iUser{
  email: string;
  name: string;
  id: number;
}
interface iUserContext{
  user: iUser | null;
  loginSubmit: (data: TLoginFormValue) => Promise<void>
  registerSubmit: (formData: TRegisterValues) => Promise<void>
  logoutUser: () => void
}

interface IUserLoginResponse{
  accessToken: string;
  user: iUser;
}

interface iProviderPros{
  children: React.ReactNode
}

export const UserContext = createContext({} as iUserContext)

export const UserProvider = ({children}: iProviderPros) => {
  const [user, setUser] = useState<iUser | null>(null)
  const navigate = useNavigate();

  const loginSubmit = async (data: TLoginFormValue) => {
    try {
      const response = await api.post<IUserLoginResponse>("/login", data)
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
      setUser(response.data.user)
      toast.success("Login realizado com sucesso!", { autoClose: 2500 });
      setTimeout(() => {
        navigate("/dashboard");
      }, 2500);
    } catch (error) {
      toast.error("Erro ao efetuar o login!", { autoClose: 2500 });
      localStorage.removeItem("@TOKEN");
      localStorage.removeItem("@USERID");
    }
  }

  const registerSubmit = async(formData: TRegisterValues) =>{
    try {
      const response = await api.post<iUser>("/users", formData)
      toast.success("Usuario registrado com sucesso", {autoClose:2500})
      setTimeout(() => {
        navigate("/");
      }, 2500);
    } catch (error) {   
      toast.error("Ocorreu erro ao fazer cadastro", {autoClose:2500})
      console.log(error)
    }
  }

  const logoutUser = () =>{
    localStorage.clear()
    navigate("/")
    toast.success("Voce fez logout", {autoClose:2500})
  }
  
    return (
      <UserContext.Provider value={{user, loginSubmit, registerSubmit, logoutUser}}>
        {children}
      </UserContext.Provider>
    )
  }