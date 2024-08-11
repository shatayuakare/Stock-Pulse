import React from 'react'
import Form from '../contact/Form'

const Contact = () => {
    return (
        <section className='flex items-center bg-blue-50'>

            <div className='md:w-5/6 grid md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto'>
                <img className='w-full mx-auto' src="https://cdni.iconscout.com/illustration/premium/thumb/man-discussing-query-with-smart-assistant-4658651-3865296.png" alt="" />
                <Form />
            </div>

        </section>
    )
}

export default Contact