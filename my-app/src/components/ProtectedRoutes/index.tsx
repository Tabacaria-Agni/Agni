import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import {Navigate, Outlet} from "react-router-dom"
import {LoadingComponent} from "../../components/LoadingComponent/loading"


export const ProtectedRoutes = () => {
    const {user, mesage} = useContext(UserContext)
    const token = localStorage.getItem("@TOKEN")
  
    if(mesage){
        return(
            <LoadingComponent/>
        )
    }
    if(!token){
        return<Navigate to={"/"}/>
    }
    return <Outlet/>
}