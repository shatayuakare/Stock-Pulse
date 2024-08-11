import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Form = () => {

    const [loader, setLoader] = useState(false)
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const contactForm = async (event) => {
        event.preventDefault();
        setLoader(true)
        const contactInfo = { name, email, subject, message: msg };

        await axios.post("https://stock-pulse.onrender.com/contact/add", contactInfo).then((res) => toast.success(res.data.message)).catch((err) => toast.error(err.response.data.message))

        setEmail("")
        setName("")
        setMsg("")
        setSubject("")
        setLoader(false)
    }

    return (
        <form className='bg-zinc-500 bg-opacity-50 shadow-xl rounded-sm p-6 backdrop-blur-sm' action="" method='post' onSubmit={contactForm}>
            <h4 className='text-3xl text-center text-zinc-200 font-bold uppercase p-2'>
                Contact us
                <hr className='border-2 rounded-full border-orange-600 w-24 mt-3 mx-auto' />
            </h4>

            <input className='input bg-zinc-100 w-full  mt-4' type="text" name="name" placeholder='Name...'
                value={name}
                onChange={(event) => setName(event.target.value)} />

            <input className='input bg-zinc-100 w-full  mt-4' type="email" name="email" placeholder='Email...'
                value={email}
                onChange={(event) => setEmail(event.target.value)} />

            <input className='input bg-zinc-100 w-full  mt-4' type="text" name="subject" placeholder='Subject...'
                value={subject}
                onChange={(event) => setSubject(event.target.value)} />

            <textarea className='textarea bg-zinc-100 w-full mt-4 resize-none' name="msg" placeholder='Message...' rows={3}
                value={msg}
                onChange={(event) => setMsg(event.target.value)}
            ></textarea>
            <button type='submit' className='btn btn-ghost w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white'>

                {
                    loader ?
                        <span className="loading loading-dots loading-md"></span>
                        :
                        <span>
                            Contact Us
                        </span>
                }

            </button>

        </form>
    )
}

export default Form