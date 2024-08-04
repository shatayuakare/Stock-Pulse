import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { validateEmail } from '../../helper';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(null);
    const [passwordType, setPasswordType] = useState("password")


    // const api = axios.create({
    //     baseURL: 'http://localhost:4000',
    // });


    function getToken() {
        try {
            const token = document.cookie.match(/Bearer\s+([a-zA-Z0-9-_]+)/);
            return token ? token[1] : null;
        } catch (error) {
            console.log(error)
        }
    }

    const login = async (event) => {
        event.preventDefault();
        if (!email) {
            if (!validateEmail(email)) {
                toast.error("abe achese email dal")
                setError("Please enter valid Email address")
                return;
            }
        }

        if (!password) {
            setError("Please enter password")
            return;
        }

        const loginInfo = {
            email, password
        }
        await axios.post("http://localhost:4000/auth/login", loginInfo).then((res) => {

            console.log("Response : ", res.data)

            // const token = getToken()
            // console.log("Token ", token)

            localStorage.setItem("user", JSON.stringify(res.data.user))
            toast.success("Account Successfully Logged In")
            window.location.reload();
        }).catch((err) => {
            console.log("Error", err)
            toast.error(err.response.data.message)
        })

        await axios.interceptors.push({
            request: (config) => {
                const userId = getCookie('userId');
                if (userId) {
                    config.headers['X-User-ID'] = userId;
                }
                return config;
            },
        });

        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length !== 2) return null;
            return parts.pop().split(';').shift();
        }
    }

    return (
        <section className='content-center'>
            <div className="md:w-4/5 sm:w-full mx-auto shadow-lg flex md:flex-row rounded-sm bg-white overflow-hidden sm:flex-col">
                <div className="xl:w-2/5 md:p-3 sm:px-2 sm:py-0">
                    <form className='px-4 p-2' action="" onSubmit={login}>
                        <h4 className='text-3xl text-center text-zinc-500 font-bold p-3 uppercase'>
                            Login
                            <hr className='border-2 rounded-full border-orange-600 w-24 mt-3 mx-auto' />
                        </h4>

                        <input className='input bg-zinc-100 w-full  mt-4' type="email" name="email" placeholder='Email...'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)} />

                        <div className='relative flex items-center'>
                            <input className='input bg-zinc-100 w-full mt-3' type={passwordType} name="password" placeholder='Password...'
                                value={password}
                                onChange={(event) => setPassword(event.target.value)} />

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

                        {
                            error && <p className='text-red-500 mt-2'>{error}.</p>
                        }
                        <button type='submit' className='btn btn-ghost w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white'>
                            Login Now
                        </button>


                        <div className='p-3 text-center text-zinc-500'>
                            New Register Account?
                            <Link className='text-blue-500' to={"/register"}> Register</Link>
                        </div>
                    </form>
                </div>
                <div className="xl:w-3/5 bg-[url('https://images.herzindagi.info/image/2024/Jul/best-Laptop-for-office-use-6.jpg')] text-white bg-cover bg-center">

                    <div className='p-3 flex justify-center items-center h-full flex-col text-center bg-gradient-to-b to-black from-transparent mt-14'>
                        <div className='uppercase text-3xl font-["cinzel_decorative"]'>Welcome</div>
                        <hr className='border-2 border-orange-600 w-24 mt-3' />
                        <div className='p-2 text-gray-400 w-2/3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nobis!
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Login