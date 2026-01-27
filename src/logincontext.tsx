import { createContext,useContext,useState, type ReactNode } from "react";
interface Authtype {
    islogin : boolean;
    setislogin:React.Dispatch<React.SetStateAction<boolean>>;
}
const authcontext = createContext<Authtype|undefined>(undefined)
export function AuthProvider({children}:{children:ReactNode})
{
    const [islogin,setislogin] = useState(false)
    return(
        <authcontext.Provider value={{islogin,setislogin}}>
            {children}
        </authcontext.Provider>
    )
}
export function useAuth()
{
    const ctx = useContext(authcontext)
    if(!ctx)
        throw new Error('Auth error')
    return ctx
}