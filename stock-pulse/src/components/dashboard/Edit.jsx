import React, { useState } from 'react'
import { useAuth } from '../../context/AuthProvider'
import axios from 'axios';
import { toast } from 'react-toastify';

const Edit = () => {
    const [authUser, setAuthUser] = useAuth();
    setAuthUser(authUser);

    const [loader, setLoader] = useState(false)
    const [name, setName] = useState(authUser.name)
    const [phone, setPhone] = useState(authUser.phone)


    const email = authUser.email;

    const saveChangesHandler = async (event) => {
        event.preventDefault();

        const data = { name, email, phone }

        console.log(data);
        setLoader(true)
        await axios.get("http://localhost:4000/auth/update", data).then(() => {
            toast.success("Account Update Successfully")
            setLoader(false)
        }).catch((err) => toast.error(err.response.data.message))
        setLoader(false)
    }

    return (
        <div className='h-full w-full grid md:grid-cols-2 gap-4 sm:grid-cols-1'>
            <div className='bg-white md:p-6 sm:p-3 rounded-sm'>
                <h4 className='text-center sm:text-2xl md:text-3xl text-zinc-600 font-bold p-2'>
                    Update profile
                </h4>
                <form action="" className='gap-6' onSubmit={saveChangesHandler} method='post'>
                    <input className='input disabled:bg-blue-100 disabled:text-zinc-500 w-full mt-4' type="email" name="email" placeholder='Email Address'
                        defaultValue={email} disabled={true}
                    />
                    <input className='input bg-blue-100 w-full mt-4' type="text" name="name" placeholder='Name...'
                        defaultValue={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <input className='input bg-blue-100 w-full mt-4' type="tel" name="name" placeholder='Phone Number...'
                        defaultValue={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />

                    <button className='btn btn-ghost bg-orange-500 hover:bg-orange-600 my-4 text-white'>
                        {
                            loader ?
                                <span className="loading loading-dots loading-md"></span>
                                :

                                <span>Save Changes</span>
                        }
                    </button>
                </form>
            </div>



            <div className=""></div>
        </div>
    )
}

export default Edit