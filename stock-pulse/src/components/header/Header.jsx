import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'
import { toast } from 'react-toastify'


const menu = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Contact",
        path: "/contact"
    },
]

const Header = () => {

    const logout = () => {
        localStorage.removeItem('user')
        toast.success("Logout")
        window.location.reload()
    }
    const [sticky, setSticky] = useState(false);
    const [authUser, setAuthUser] = useAuth();

    setAuthUser(authUser)
    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY >= 100) {
                setSticky(true);
            } else {
                setSticky(false)
            }
        }

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler)
    }, [])


    return (
        <header className={`navbar md:px-24 fixed bg-transarent z-50 ${sticky ? 'bg-white shadow-lg' : ''}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">


                        {
                            menu.map((elem, idx) => {
                                return (
                                    <li key={idx}><Link to={elem.path}>{elem.name}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <Link to={'/'} className={`btn btn-ghost btn-sm text-xl cssanimation lePeek sequence ${!sticky ? 'text-white' : 'text-orange-600'}`}>
                    Stock Pulse
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">

                <ul className={`menu menu-horizontal px-1 ${sticky ? 'text-zinc-800' : 'text-zinc-500'}`}>
                    {
                        authUser ? <li><Link to={'/dashboard'}>Dashboard</Link></li> : undefined
                    }

                    {
                        menu.map((elem, idx) => {
                            return (
                                <li key={idx}><Link to={elem.path}>{elem.name}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="navbar-end">

                {
                    !authUser ?
                        <div className={`join rounded-sm border-2 border-orange-500 ${sticky ? '' : 'border-white'}`}>
                            <Link to={'/login'} className={`btn btn-ghost btn-sm py-3  join-item bg-orange-500 h-auto hover:bg-orange-600 px-5 ${sticky ? 'text-white' : 'bg-white hover:bg-zinc-100 text-orange-500'}`}>Login</Link>
                            <Link to={'/register'} className={`btn btn-ghost btn-sm h-auto py-3 px-5 text-orange-500 hover:text-orange-600 join-item  ${sticky ? '' : 'text-white'}`}>Register</Link>
                        </div>
                        :
                        <button className={`btn rounded-sm btn-ghost btn-sm py-3 text-white join-item bg-orange-500 h-auto hover:bg-orange-600 px-5 ${sticky ? 'bg-white text-orange-500' : ''}`} onClick={logout}>
                            Log Out
                        </button>
                }


                {/* <Link to="/dashboard" className="btn">Dashboard</Link> */}
            </div>


        </header>
    )
}

export default Header