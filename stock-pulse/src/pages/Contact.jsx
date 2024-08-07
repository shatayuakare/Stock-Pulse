import React from 'react'
import FAQ from '../components/about/FAQ';
import Form from '../components/contact/Form';
import Hero from '../components/contact/Hero';

const Contact = () => {


    return (
        <section className="bg-[url('https://cdn.prod.website-files.com/6442419dcf656a81da76b503/65acae487aa1e2b14fbe3fe2_design-studio-with-colleagues-background.webp')] bg-cover bg-center p-0 bg-fixed">
            <div className="h-vh w-full bg-black bg-opacity-25 flex items-center">
                <div className="w-4/5 mx-auto">
                    <div className='w-1/2 mt-6'><Form /></div>
                </div>
            </div>


            <Hero />

            <FAQ />

        </section>
    )
}

export default Contact