import { createContext, useContext, useState } from "react"
// import Cookie from "js-cookie";
// import jwt from "jsonwebtoken"
// import * as jose from "jose"

export const AuthContext = createContext();

// const JSON_KEY = "nahibataunga"
export default function AuthProvider({ children }) {

    // const token = Cookie.get('token');
    // try {
    //     const initialauthUser = jwt.verify(token, JSON_KEY, ((err, decode) => {
    //         if (err) {
    //             console.log(err)
    //         } else {
    //             console.log(decode)
    //         }
    //     }));
    // } catch (error) {
    //     console.error(error)
    // }

    const initialauthUser = localStorage.getItem("user");
    // console.log(Cookie.get("name"))
    const [authUser, setAuthUser] = useState(
        initialauthUser ? JSON.parse(initialauthUser) : undefined
    )

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider >
    )
}

export const useAuth = () => useContext(AuthContext);