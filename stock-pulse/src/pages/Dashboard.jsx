import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <section className='p-0 bg-white' id='dashboard'>
            <div className='flex gap-6 mx-6 p-4 md:flex-row sm:flex-col'>
                <div className='xl:w-1/4 my-auto '>
                    {/* <div className="pt-6 block">
                        <div className="-mb-10 mx-auto h-24 bg-cover w-24 rounded-full bg-[url('https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp')] border-4 border-white shadow-lg"></div>

                        <div className="h-40 rounded-md bg-cover bg-[url('https://api.hyundaimobisin.com/service/asset/accessory/2558-K3F10IH101_Steering-Wheel-Cover_1_Red-Black_720x400.jpg')]">
                        </div>
                    </div>

                    <div className='text-center'>
                        <h4 className='text-xl font-bold my-2'>
                            Shatayu Jtendra Akare
                        </h4>
                    </div> */}

                    <ul className="menu rounded-box mx-auto text-zinc-500">
                        <li>
                            <Link to="">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="account">Account</Link>
                        </li>
                        <li>
                            <Link to="edit">Edit</Link>
                        </li>
                        <li>
                            <Link to="product">Product</Link>
                        </li>
                        <li>
                            <Link to="setting">Setting</Link>
                        </li>
                    </ul>
                </div>
                <div className='w-3/4'>
                    <div className='p-4 py-6 text-2xl font-bold'>
                        Dashboard
                    </div>

                    <div className=' p-4 flex rounded-sm'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Dashboard