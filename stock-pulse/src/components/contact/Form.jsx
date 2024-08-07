import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const contactForm = async () => {
        const contactInfo = { name, email, message: msg };

        await axios.post("http://localhost:4000/contact/add", contactInfo).then(() => toast.success("Application Successfully send")).catch((err) => toast.error(err.response.data.message))
    }

    return (
        <form className='bg-white shadow-xl rounded-sm p-6' action="" onSubmit={contactForm}>
            <h4 className='text-3xl text-center font-bold uppercase p-2'>
                Contact us
                <hr className='border-2 rounded-full border-orange-600 w-24 mt-3 mx-auto' />
            </h4>

            <input className='input bg-zinc-100 w-full  mt-4' type="text" name="name" placeholder='Name...'
                value={name}
                onChange={(event) => setName(event.target.value)} />

            <input className='input bg-zinc-100 w-full  mt-4' type="email" name="email" placeholder='Email...'
                value={email}
                onChange={(event) => setEmail(event.target.value)} />

            <textarea className='textarea bg-zinc-100 w-full mt-4 resize-none' name="msg" placeholder='Message...' rows={3}
                value={msg}
                onChange={(event) => setMsg(event.target.value)}
            ></textarea>
            <button type='submit' className='btn btn-ghost w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white'>
                Contact Us
            </button>

        </form>
    )
}

export default Form