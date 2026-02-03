import { createContext,useContext,useState, type ReactNode } from "react";
interface Authtype {
    islogin : boolean;
    gloid:String
    setislogin:React.Dispatch<React.SetStateAction<boolean>>;
    setgloid:React.Dispatch<React.SetStateAction<String>>;
}
const authcontext = createContext<Authtype|undefined>(undefined)
export function AuthProvider({children}:{children:ReactNode})
{
    const [islogin,setislogin] = useState(false)
    const [gloid,setgloid] = useState<String>("")
    return(
        <authcontext.Provider value={{islogin,setislogin,gloid,setgloid}}>
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