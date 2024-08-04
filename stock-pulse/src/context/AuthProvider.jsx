import { createContext, useContext, useState } from "react"
import axios from "axios"

export const AuthContext = createContext();


export default function AuthProvider({ children }) {


    const initialauthUser = localStorage.getItem("user");

    axios.get("http://localhost:4000/auth").then((res) => {
        console.log(res)
    }).catch((err) => console.log(err.response.data.message))

    const [authUser, setAuthUser] = useState(
        initialauthUser ? JSON.parse(initialauthUser) : undefined
    )

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);