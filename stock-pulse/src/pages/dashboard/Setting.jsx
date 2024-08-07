import React, { useState } from 'react'
import { useAuth } from '../../context/AuthProvider'
import axios from 'axios';
import { toast } from 'react-toastify';

const Setting = () => {
    const [authUser, setAuthUser] = useAuth();
    const [passwordType, setPasswordType] = useState("password")
    const [password, setPassword] = useState("")
    const [password1, setPassword1] = useState("")

    setAuthUser(authUser)

    const email = authUser.email;

    const changePassword = async () => {
        if (password !== password1) {
            toast.error("Password not same")
            return;
        }

        const data = {
            email, newPassowrd: password
        }

        await axios.post("http://localhost:4000/auth/change", data).then((res) => {
            toast.success("Password Changed")
            console.log(res)
            window.location.reload()
        }).catch((err) => {
            toast.error(err.message)
            console.log(err)
        })
    }

    return (
        <div className='h-full w-full md:grid md:grid-cols-2 gap-4 sm:grid-cols-1'>
            <div className='bg-blue-50 p-4 rounded-sm'>
                <h4 className='text-center text-3xl font-bold p-2'>
                    Change Password
                </h4>
                <form action="" className='gap-6' onSubmit={changePassword} method='post'>
                    <input className='input bg-blue-100 w-full mt-4' type="email" name="email" placeholder='Email Address'
                        value={email}
                    />
                    <div className='relative flex items-center mt-4'>
                        <input className='input bg-blue-100 w-full mt-3' type={passwordType} name="password" placeholder='New Password...'
                            value={password1}
                            onChange={(e) => setPassword1(e.target.value)} />

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
                        <input className='input bg-blue-100 w-full mt-3' type={passwordType} name="password" placeholder='Conform Password...'
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

                    <button className='btn bg-orange-500 hover:bg-orange-600 mt-4 text-white'>
                        Change Password
                    </button>
                </form>
            </div>
            <div></div>
        </div>
    )
}

export default Setting