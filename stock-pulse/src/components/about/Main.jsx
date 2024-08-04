import React from 'react'

const Main = () => {
    return (
        <section className='flex items-end p-0'>
            <div className="md:w-4/5 grid grid-cols-2 mx-auto">
                <div className='text-white flex flex-col justify-center pb-8'>
                    <div className='font-bold text-xl text-zinc-400 p-2 ps-4'>
                        About Us
                        <hr className='w-12 border-2 border-orange-500 rounded-full' />
                    </div>
                    <h4 className='p-2 text-5xl font-bold'>
                        We Help IT Companies Scale Engineering Capacity
                        <hr className='border-2 rounded-full border-blue-500 w-48 mt-5 mb-2' />
                    </h4>

                    <p className='p-2 text-zinc-300 text-lg'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae aut earum magni commodi fuga optio asperiores soluta velit pariatur sapiente facere quidem, accusantium minima dolorum. Lorem ipsum dol
                    </p>

                    <a className='btn bg-orange-500 hover:bg-orange-600 text-white md:w-1/3 border-none rounded-sm my-5' href="#team">
                        Meet Team
                    </a>
                </div>

                <div>
                    <img className='w-full' src="https://validthemes.net/site-template/techa/assets/img/illustration/7.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Main