import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-wrap h-[50vh] bg-blue-50 items-center justify-around gap-6 md:px-24 text-zinc-600'>

            <div className="card border-2 border-zinc-300 bg-blue-100  hover:border-zinc-400 flex-1 text-zinc-600 rounded-md">
                <div className="card-body gap-2">

                    <i className='bx bxl-gmail text-3xl' ></i>
                    <div className="card-title hover:text-black">
                        Email
                    </div>
                    stock-pulse@market.com
                    <a className='btn w-fit btn-sm px-4' href="">
                        Contact
                    </a>
                </div>
            </div>
            <div className="card border-2 border-zinc-300 bg-blue-100 hover:border-zinc-400 flex-1 text-zinc-600 rounded-md">
                <div className="card-body gap-2">

                    <i className='bx bx-phone text-3xl' ></i>
                    <div className="card-title hover:text-black">
                        Phone
                    </div>
                    Office : 2255886995
                    <a className='btn w-fit btn-sm px-4' href="">
                        Call
                    </a>
                </div>
            </div>
            <div className="card border-2 border-zinc-300 bg-blue-100 hover:border-zinc-400 flex-1 text-zinc-600 rounded-md">
                <div className="card-body gap-2">

                    <i className='bx bx-map text-3xl' ></i>
                    <div className="card-title hover:text-black">
                        Office
                    </div>
                    6391 Elgin St. Celina, Delaware 10299
                    <a className='btn w-fit btn-sm px-4' href="">
                        Location
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Hero