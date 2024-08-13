import React from 'react'
import Main from '../components/home/Main';
import Contact from '../components/home/Contact1';
import Team from "../components/about/Team";
import FAQ from '../components/about/FAQ';
import Hero from '../components/contact/Hero';

const Home = () => {
    return (
        <section className="bg-[url('https://img.freepik.com/free-vector/gradient-minimalist-background_23-2149974337.jpg')] bg-cover bg-center p-0 bg-fixed">
            <Main />
            <Hero />
            <Team />
            <Contact />
            <FAQ />
        </section >
    )
}

export default Home