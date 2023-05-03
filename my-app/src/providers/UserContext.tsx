import { createContext } from "react";

export const UserContext = createContext({} as iUserContext)

interface iUserContext{

}

interface iProviderPros{
  children: React.ReactNode
}

export const UserProvider = ({children}: iProviderPros) => {
      
  
    return(
      <UserContext.Provider value={{}}>
        {children}
      </UserContext.Provider>
    )
  }