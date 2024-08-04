import React, { useState } from 'react'
import { useAuth } from '../../context/AuthProvider'

const Setting = () => {
    const [authUser, setAuthUser] = useAuth();
    const [passwordType, setPasswordType] = useState("password")

    setAuthUser(authUser)

    const email = authUser.email

    return (
        <div className='h-full w-full md:grid grid-cols-2 gap-4 sm:grid-cols-1'>
            <div className='bg-blue-100 p-4'>
                <form action="">
                    <input className='input bg-zinc-100 w-full mt-3' type="email" name="email" placeholder='Email Address'
                        value={email}
                    />
                    <div className='relative flex items-center'>
                        <input className='input bg-zinc-100 w-full mt-3' type={passwordType} name="password" placeholder='Password...'
                            value={"Hello"}
                            onChange={""} />

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
                </form>
            </div>
        </div>
    )
}

export default Setting