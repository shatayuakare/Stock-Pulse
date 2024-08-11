import React from 'react'
import Team from '../components/about/Team'
import Main from '../components/about/Main'
import FAQ from '../components/about/FAQ'
import Info from '../components/about/Info'

const About = () => {
    return (
        <section className="bg-[url('https://www.protectedtrust.com/wp-content/uploads/2020/12/best-microsoft-teamwork-tools-1024x684.jpeg')] bg-cover bg-center p-0 bg-fixed ">
            <div className='h-vh w-full bg-black bg-opacity-75 sm:pt-16'>
                <Main />
            </div>

            <div className='bg-white'>
                <Info />
                <Team />
                <FAQ />
            </div>
        </section>
    )
}

export default About