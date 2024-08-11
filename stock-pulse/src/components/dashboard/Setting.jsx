import React, { useState } from 'react'
import { useAuth } from '../../context/AuthProvider'
import axios from 'axios';
import { toast } from 'react-toastify';

const Setting = () => {
    const [authUser, setAuthUser] = useAuth();
    const [loader, setLoader] = useState(false)
    const [passwordType, setPasswordType] = useState("password")
    const [oldPassowrd, setoldPassword] = useState("")
    const [password, setPassword] = useState("")

    setAuthUser(authUser)

    const email = authUser.email;

    const changePassword = async (event) => {
        event.preventDefault();

        setLoader(true)
        if (oldPassowrd === password) {
            toast.warn("Password must be different")
            setLoader(false)
            return;
        }
        const data = {
            email, oldPassowrd, newPassowrd: password
        }
        console.log(data)

        // await axios.post("http://localhost:4000/auth/change", data).then((res) => {
        //     console.log(res)
        //     toast.success(res.data.message)
        //     setLoader(false)
        //     // window.location.reload()
        // }).catch((err) => {
        //     toast.error(err.message)
        //     console.error(err)
        // })
        setLoader(false)
    }

    return (
        <div className='h-full w-full grid md:grid-cols-2 gap-4 sm:grid-cols-1'>
            <div className='bg-white md:p-6 sm:p-3 rounded-sm'>
                <h4 className='text-center sm:text-2xl md:text-3xl text-zinc-600 font-bold p-2'>
                    Change Password
                </h4>
                <form action="" className='gap-6' onSubmit={changePassword} method='post'>
                    <input className='input bg-blue-100 w-full mt-4' type="email" name="email" placeholder='Email Address'
                        defaultValue={email}
                    />
                    <div className='relative flex items-center mt-4'>
                        <input className='input bg-blue-100 w-full mt-3' type={passwordType} name="password" placeholder='Old Password...'
                            value={oldPassowrd}
                            onChange={(e) => setoldPassword(e.target.value)} />

                        <div className="absolute text-2xl text-zinc-500 my-auto p-1 mt-4 right-2">
                            {
                                (passwordType === "password") ?
                                    <button type='button' onClick={() => setPasswordType("text")}>
                                        <i className='bx bxs-show'></i>
                                    </button>
                                    :
                                    <button type='button' onClick={() => setPasswordType("password")}>
                                        <i className='bx bxs-hide'></i>
                                    </button>
                            }
                        </div>
                    </div>

                    <div className='relative flex items-center mt-4'>
                        <input className='input bg-blue-100 w-full mt-3' type={passwordType} name="password" placeholder='New Password...'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />

                        <div className="absolute text-2xl text-zinc-500 my-auto p-1 mt-4 right-2">
                            {
                                (passwordType === "password") ?
                                    <button type='button' onClick={() => setPasswordType("text")}>
                                        <i className='bx bxs-show'></i>
                                    </button>
                                    :
                                    <button type='button' onClick={() => setPasswordType("password")}>
                                        <i className='bx bxs-hide'></i>
                                    </button>
                            }
                        </div>
                    </div>

                    <button className='btn btn-ghost bg-orange-500 hover:bg-orange-600 my-4 text-white'>
                        {
                            loader ?
                                <span className="loading loading-dots loading-md"></span>
                                :

                                <span>Change Password</span>
                        }
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Setting