import React from 'react'
import Hero from '../Components/Hero'
import About from './About'
import Qualification from '../Pages/Qualification'
import Services from './Services'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'
import Testimonials from './Testimonials'
import Stats from './Stats'

const AnotherHome = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Services />
            <Qualification />
            <Portfolio />
            <Testimonials />
            <Stats />
            <Contact />
            <Footer />
        </>
    )
}

export default AnotherHome