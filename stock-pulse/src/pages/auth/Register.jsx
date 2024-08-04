import React, { useState } from 'react'
import axios from "axios"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"
import { validateEmail } from '../../helper';

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(null)
    const [passwordType, setPasswordType] = useState("password")

    const register = async (e) => {
        e.preventDefault()

        if (!name) {
            setError("Please enter name")
            return;
        }
        if (!validateEmail(email)) {
            setEmail("Email address is not valid")
            return
        }
        if (!phone) {
            setError("Please enter contact number")
            return;
        }
        if (!password) {
            setError("Please enter password")
            return;
        }

        const registerInfo = {
            name, email, phone, password
        }

        await axios.post("https://stock-pulse.onrender.com/auth/register", registerInfo).then((res) => {
            console.log(res)
            localStorage.setItem("user", JSON.stringify(res.data.user))
            toast.success("Account Successfully Registered.")
            window.location.reload();
        }).catch((err) => {
            console.log("Error", err.message)
        })
    }

    return (
        <section className='content-center'>
            <div className="md:w-4/5 mx-auto shadow-lg flex rounded-sm bg-white overflow-hidden">

                <div className="xl:w-2/5 bg-[url('https://img.freepik.com/premium-photo/technology-professional-young-businessman-with-tablet-studio-background-social-networking-digital-communication-isolated-male-person-with-mobile-device-search-backdrop_590464-180333.jpg')] text-white bg-cover bg-center">
                    <div className='p-3 flex justify-center items-center h-full flex-col text-center bg-gradient-to-b to-black from-transparent mt-14'>
                        <div className='uppercase text-3xl font-["cinzel_decorative"]'>Welcome</div>
                        <hr className='border-2 border-orange-600 w-24 mt-3' />
                        <div className='p-2 text-gray-400 w-2/3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nobis!
                        </div>
                    </div>
                </div>
                <div className='xl:w-3/5 p-3 '>
                    <form className='px-4 p-2' action="" onSubmit={register}>

                        <h4 className='text-3xl text-center text-zinc-500 font-bold p-3 uppercase'>
                            Registration
                            <hr className='border-2 rounded-full border-orange-600 w-24 mt-3 mx-auto' />
                        </h4>

                        <input className='input bg-zinc-100 w-full mt-2' type="text" name="name" placeholder='Name...'
                            value={name}
                            onChange={(event) => setName(event.target.value)} />
                        <input className='input bg-zinc-100 w-full  mt-3' type="email" name="email" placeholder='Email...'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)} />
                        <input className='input bg-zinc-100 w-full mt-3' type="tel" name="phone" placeholder='Phone...'
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)} />
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
                        <button className='btn btn-ghost w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white'>
                            Register Now
                        </button>


                        <div className='p-3 text-center text-zinc-500'>
                            Already registered Account?
                            <Link className='text-blue-500' to={"/login"}> Login</Link>
                        </div>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default Register