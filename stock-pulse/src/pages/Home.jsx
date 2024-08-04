import React from 'react'
import Team from "../components/about/Team";
import Main from '../components/Home/Main';
import FAQ from '../components/about/FAQ';

const Home = () => {
    return (
        <section className="bg-[url('https://www.protectedtrust.com/wp-content/uploads/2020/12/best-microsoft-teamwork-tools-1024x684.jpeg')] bg-cover bg-center p-0 bg-fixed">
            <div className='h-vh w-full bg-black bg-opacity-75'>
                <Main />
            </div>

            <Team />
            <FAQ />
        </section >
    )
}

export default Home