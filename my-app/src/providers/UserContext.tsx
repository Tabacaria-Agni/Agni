import { createContext, useState } from "react";
import { TLoginFormValue } from "../schema/loginSchema";
import { api } from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
interface IUser{
  email: string;
  name: string;
  id: number;
}
interface iUserContext{
  user: IUser | null;
  loginSubmit: (data: TLoginFormValue) => Promise<void>
}

interface IUserLoginResponse{
  accessToken: string;
  user: IUser;
}

interface iProviderPros{
  children: React.ReactNode
}

export const UserContext = createContext({} as iUserContext)

export const UserProvider = ({children}: iProviderPros) => {
  const [user, setUser] = useState<IUser | null>(null)
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
  
    return (
      <UserContext.Provider value={{user, loginSubmit}}>
        {children}
      </UserContext.Provider>
    )
  }