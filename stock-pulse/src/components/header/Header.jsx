import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'

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
        Cookies.remove("token")
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
        <header className={`navbar content-center md:px-24 fixed bg-transarent z-50 ${sticky ? 'bg-white shadow-lg' : ''}`}>
            <div className="navbar-start text-white">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className={`btn p-1 btn-sm btn-ghost lg:hidden ${sticky ? 'text-zinc-700' : 'text-white'}`}>
                        <i className='bx text-3xl bx-menu-alt-left'></i>
                    </div>
                    <ul
                        tabIndex={0}
                        className={"menu menu-sm dropdown-content rounded-box z-[1] mt-0 p-2 gap-2 shadow"}>
                        {
                            menu.map((elem, idx) => {
                                return (
                                    <li className="bg-black bg-opacity-25 text-white rounded-md" key={idx}>
                                        <Link to={elem.path}>{elem.name}</Link>
                                    </li>
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
                <ul className={`menu menu-horizontal px-1 ${sticky ? 'text-zinc-800' : 'text-zinc-50'} font-bold`}>
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
            <div className="navbar-end sm:hidden md:flex">
                {
                    !authUser ?
                        <div className={`join rounded-sm border-2 border-orange-500 ${sticky ? '' : 'border-white'}`}>
                            <Link to={'/login'} className={`btn btn-ghost btn-sm py-3  join-item bg-orange-500 h-auto hover:bg-orange-600 px-5 ${sticky ? 'text-white' : 'bg-white hover:bg-zinc-100 text-orange-500'}`}>Login</Link>
                            <Link to={'/register'} className={`btn btn-ghost btn-sm h-auto py-3 px-5 text-orange-500 hover:text-orange-600 join-item  ${sticky ? '' : 'text-white'}`}>Register</Link>
                        </div>
                        :
                        <button className={`btn rounded-sm btn-ghost btn-sm py-3 join-item  h-auto px-5 ${!sticky ? 'bg-zinc-50 text-orange-500 hover:bg-white' : 'bg-orange-500 hover:bg-orange-600 text-white'}`} onClick={logout}>
                            Log Out
                        </button>
                }
            </div>
            <div className="navbar-end sm:flex md:hidden">
                <div className="dropdown dropdown-end dropdown-hover">
                    <div tabIndex={0} role="button" className={`btn btn-sm btn-ghost bg-transparent ${sticky ? 'text-zinc-700' : 'text-white'}`}>
                        <i className='bx bxs-user-detail text-3xl'></i>
                    </div>

                    {

                        authUser ?
                            <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] p-2 mt-1 shadow gap-2">
                                <li className='bg-black bg-opacity-25 text-white rounded-md'>
                                    <Link to={'/dashboard'}>Dashboard</Link>
                                </li>
                                <li className='bg-black bg-opacity-25 text-white rounded-md'>
                                    <Link to={'/dashboard/account'}>Account</Link>
                                </li>
                                <li className='bg-black bg-opacity-25 text-white rounded-md'>
                                    <Link to={'/dashboard/edit'}>Edit</Link>
                                </li>
                                <li className='bg-black bg-opacity-25 text-white rounded-md'>
                                    <Link to={'/dashboard/setting'}>Setting</Link>
                                </li>
                            </ul>
                            :
                            <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] p-2 mt-1 shadow gap-2">
                                <li>
                                    <Link to={'/login'} className={`btn btn-ghost btn-sm py-3  join-item bg-orange-500 h-auto hover:bg-orange-600 px-5 ${sticky ? 'text-white' : 'bg-white hover:bg-zinc-100 text-orange-500'}`}>Login</Link>
                                </li>
                                <li>
                                    <Link to={'/register'} className={`btn btn-ghost btn-sm h-auto py-3 px-5 text-orange-500 hover:text-orange-600 join-item  ${sticky ? '' : 'text-white'}`}>Register</Link>
                                </li>
                            </ul>

                    }

                </div>
            </div>

        </header >
    )
}

export default Header