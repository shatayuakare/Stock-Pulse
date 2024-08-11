import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {

    const [currentTab, setCurrentTab] = useState(1);

    return (
        <section className="bg-[url('https://img.freepik.com/free-vector/gradient-minimalist-background_23-2149974337.jpg')] bg-cover bg-center p-0 bg-fixed" id='dashboard'>

            <div className='h-full flex md:flex-row sm:flex-col'>
                <div className='md:w-1/5 sm:w-full bg-transparent'>
                    <div className='text-center select-none pt-8'>
                        <div className="mask mask-squircle w-40 h-40 mx-auto">
                            <img src="https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp" alt="" />
                        </div>
                        <h4 className=' my-2 text-black'>
                            Hello, <span className="text-white text-xl font-bold">Shatayu!</span>
                        </h4>
                    </div>

                    <ul className="menu rounded-box mx-auto text-blue-50 pe-0 gap-1 p-3">
                        <li className={`${currentTab === 1 ? 'active' : ''}`} onClick={() => setCurrentTab(1)}>
                            <Link to="">Dashboard</Link>
                        </li>
                        <li className={`${currentTab === 2 ? 'active' : ''}`} onClick={() => setCurrentTab(2)}>
                            <Link to="account">Account</Link>
                        </li>
                        <li className={`${currentTab === 3 ? 'active' : ''}`} onClick={() => setCurrentTab(3)}>
                            <Link to="edit">Edit</Link>
                        </li>
                        <li className={`${currentTab === 4 ? 'active' : ''}`} onClick={() => setCurrentTab(4)}>
                            <Link to="product">Product</Link>
                        </li>
                        <li className={`${currentTab === 5 ? 'active' : ''}`} onClick={() => setCurrentTab(5)}>
                            <Link to="setting">Setting</Link>
                        </li>
                    </ul>
                </div>
                <div className='md:w-4/5 sm:w-full bg-zinc-100 content'>
                    <div className='md:p-4 sm:p-3 sm:pt-4 sm:pb-0 text-2xl font-bold text-zinc-700'>
                        Dashboard
                    </div>

                    <div className='md:p-6 sm:p-3'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Dashboard