import React from 'react'
import FAQ from '../components/about/FAQ';
import Form from '../components/contact/Form';

const Contact = () => {


    return (
        <section className="bg-[url('https://cdn.prod.website-files.com/6442419dcf656a81da76b503/65acae487aa1e2b14fbe3fe2_design-studio-with-colleagues-background.webp')] bg-cover bg-center p-0 bg-fixed">
            <div className="h-vh w-full bg-black bg-opacity-25 flex items-center">

                <Form />
            </div>


            <div className='flex flex-wrap h-[50vh] bg-white items-center justify-around gap-6 md:px-24 text-zinc-600'>

                <div className="card border-2 border-zinc-300 hover:bg-zinc-200 hover:border-zinc-400 flex-1 text-zinc-600 rounded-md">
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
                <div className="card border-2 border-zinc-300 hover:bg-zinc-200 hover:border-zinc-400 flex-1 text-zinc-600 rounded-md">
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
                <div className="card border-2 border-zinc-300 hover:bg-zinc-200 hover:border-zinc-400 flex-1 text-zinc-600 rounded-md">
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

            <FAQ />

        </section>
    )
}

export default Contact