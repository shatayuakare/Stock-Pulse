import React from 'react'
import { Link } from "react-router-dom"


const Main = () => {
    return (
        <section className="flex items-center px-24">
            <div className="grid grid-cols-2 h-1/4 p-4  ">
                <div className='text-white p-2 gap-6 flex flex-col'>
                    <div className='text-6xl '>
                        We're the best platform to manage the Store
                    </div>
                    <div className="text-zinc-400">
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