import React from 'react'
import { Link } from "react-router-dom"


const Main = () => {
    return (
        <section className="flex items-center px-24 bg-[url('https://img.freepik.com/free-vector/gradient-minimalist-background_23-2149974337.jpg')] bg-cover ">
            {/* bg-gradient-to-r from-orange-500 to-orange-400 */}
            {/* https://cdn.pixabay.com/photo/2017/08/01/18/29/background-2567158_640.jpg */}
            <div className="grid grid-cols-2 h-1/4 p-4">
                <div className='text-white p-3 gap-6 flex flex-col'>
                    <div className='text-5xl font-["Cinzel_Decorative"] font-bold'>
                        We're the <span className="text-6xl text-orange-800">best platform</span>  to manage the Store
                    </div>
                    <div className="text-zinc-200">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta deleniti rerum cupiditate beatae ducimus fugit voluptates fuga facilis, alias vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, mollitia?
                    </div>

                    <div>
                        <Link to={'/register'} className='btn btn-ghost bg-orange-500 hover:bg-orange-600 text-white'>
                            Get Started
                        </Link>
                    </div>
                </div>
                <div>
                    <img className='h-full mx-auto' src="https://www.logicspice.com/app/webroot/img/images/inventory-management/inventory-banner-img.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Main