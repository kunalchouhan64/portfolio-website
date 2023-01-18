import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const [hireme, setHireMe] = useState('')
    const submitHandle = (event) => {
        event.preventDefault()
        let inputData = {
            clientEmail: hireme
        }
        setHireMe('')
        console.log(inputData);
    }
    return (
        <section className='h-[55vh] bg-slate-900 flex flex-col justify-between px-16 py-8'>
            <div className='flex justify-around gap-6'>
                {/* <hr className='border-2 border-white' /> */}
                <div className="logo flex flex-col space-y-3">
                    <h2 className='font-Poppins text-lg text-white'>Kunal Chouhan</h2>
                    <p className='font-Poppins w-60 text-slate-300'>Hi, I am Kunal Chouhan I am Frontend React Developer, I live in Indore, Madhya Pradesh.</p>
                </div>
                <div className="skills">
                    <h3 className='font-Poppins font-[500] text-lg text-white'>My Skills</h3>
                    <div className='flex flex-col font-Poppins text-slate-300 pt-5 space-y-1'>
                        <Link>React JS</Link>
                        <Link>Redux Toolkit</Link>
                        <Link>JavaScript (ES6)</Link>
                        <Link>Tailwind CSS</Link>
                        <Link>Meterial UI</Link>

                        <Link>GitHub</Link>
                    </div>
                </div>
                <div className="portfolio">
                    <h3 className='font-Poppins font-[500] text-lg text-white'>My Portfolio</h3>
                    <div className='flex flex-col font-Poppins text-slate-300 pt-5 space-y-1'>
                        <Link>Personal PortFolio</Link>
                        <Link>E-Commerce</Link>
                        <Link>Weather App</Link>
                        <Link>Landing Page</Link>
                        <Link>Nike Store</Link>
                        <Link>Business Page</Link>
                    </div>
                </div>
                <div className="forwork space-y-4 flex flex-col">
                    <h3 className='font-Poppins font-[500] text-lg text-white'>Hire For Work</h3>
                    <p className='font-Poppins w-60 text-slate-300'>Hello, Hire Me for Your Proffetional Projects.</p>
                    <input type="email" value={hireme} onChange={(e) => setHireMe(e.target.value)} className='py-2 px-3 rounded-xl font-Poppins' name="" id="" placeholder='Enter Your Email.' />
                    <div className='w-auto'>
                        <button onClick={submitHandle} className='py-2 px-3 border-2 border-white bg-white font-semibold font-Poppins rounded-xl'>Hire Me</button>
                    </div>

                </div>
                <div className="getintouch space-y-4 flex flex-col">
                    <h3 className='font-Poppins font-[500] text-lg text-white'>Get In Touch</h3>
                    <input type="text" className='py-2 px-3 rounded-xl font-Poppins' name="" id="" placeholder='Your Name' />
                    <input type="text" className='py-2 px-3 rounded-xl font-Poppins' name="" id="" placeholder='Your Email' />
                    <button className='py-3 px-3 border-2 hover:bg-white hover:text-black delay-200 border-white text-white font-semibold font-Poppins rounded-xl'>Get In Touch</button>
                </div>
            </div>
            <hr />
            <div className=' flex justify-between'>

                <p className='font-Poppins text-white'>Copyright <span>&#169;</span> Kunal Chouhan: All Right Reserved</p>

                <div className="social flex gap-1 text-white justify-end h-5 space-x-2 ">
                    <ion-icon name="logo-linkedin" style={{ fontSize: '1.8rem' }}></ion-icon>
                    <ion-icon name="logo-whatsapp" style={{ fontSize: '1.8rem' }}></ion-icon>
                    <ion-icon name="logo-github" style={{ fontSize: '1.8rem' }}></ion-icon>
                    <ion-icon name="logo-instagram" style={{ fontSize: '1.8rem' }}></ion-icon>
                </div>

            </div>
        </section>
    )
}

export default Footer