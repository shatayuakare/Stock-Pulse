import React from 'react'

const PageHeading = ({ title, about }) => {
    return (
        <div className='text-center py-4 font-bold'>
            <h4 className='uppercase text-orange-500 text-2xl p-2'>
                {title}
            </h4>

            <div className="text-3xl p-1 capitalize text-zinc-500">
                {about}
            </div>

            <hr className='border-2 rounded-full border-blue-500 w-36 mt-2 mx-auto' />

        </div>
    )
}

export default PageHeading