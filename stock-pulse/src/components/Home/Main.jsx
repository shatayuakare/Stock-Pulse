import React from 'react'
import { Link } from "react-router-dom"


const Main = () => {
    return (
        <section className="content-center md:px-24">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 md:p-4 sm:pt-8">
                <div className='text-white md:p-3 sm:py-4 gap-6 flex flex-col'>
                    <div className='text-5xl font-["Cinzel_Decorative"] font-bold'>
                        We're the <span className="sm:text-5xl md:text-6xl text-orange-800 underline">best platform</span>  to manage the Store
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
                <div className='order-1'>
                    <img className='h-full mx-auto md:flex scale-125 sm:flex-shrink-0 sm:hidden' src="https://www.logicspice.com/app/webroot/img/images/inventory-management/inventory-banner-img.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Main