import React from 'react'
import { Link } from 'react-router-dom'


const boardDetails = [
    {
        title: "Total Products",
        count: 25,
        icon: "bx bxs-shopping-bags",
        path: "/products",
        color: "teal",
    },
    {
        title: "Total Suppliers",
        count: 12,
        icon: "bx bxs-user-detail",
        path: "/supplier",
        color: "blue",
    },
    {
        title: "Total Suppliers",
        count: 12,
        icon: "bx bxs-user-detail",
        path: "/supplier",
        color: "rose",
    },

]

const Board = () => {
    return (
        <div className="grid gap-5 md:grid-cols-3 sm:grid-cols-1">

            {
                boardDetails.map((elem, index) => {
                    return (
                        <div className={`card bg-${elem.color}-200 h-36 rounded-sm overflow-hidden p-0`} key={index}>
                            <div className="card-body select-none text-zinc-400 p-3 flex flex-row text-select-none">
                                <div className='w-2/3 p-1'>
                                    <div className={`text-6xl text-${elem.color}-400 font-bold`}>
                                        {elem.count}
                                    </div>
                                    {elem.title}
                                </div>
                                <div className={`w-1/3 text-6xl text-center text-${elem.color}-300`}>
                                    <i className={`${elem.icon} p-2`}></i>
                                </div>
                            </div>
                            <div className={`text-center text-sm font-bold bg-${elem.color}-300 text-zinc-400`}>
                                <Link className='flex justify-center' to={elem.path}>More Info <i className='bx bx-right-arrow-alt text-lg '></i></Link>
                            </div>
                        </div>

                    )
                })
            }

        </div>
    )
}

export default Board