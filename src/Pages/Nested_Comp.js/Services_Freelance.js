import { Link } from 'react-router-dom'
import React from 'react'

const Services_Freelance = () => {
    return (
        <>

            <section className='h-[100vh] bg-slate-100 flex justify-center items-center'>
                <div className='h-[30rem] w-[32rem] bg-white rounded-3xl shadow-xl shadow-pink-400 px-7 py-4'>
                    <div className='flex justify-end  w-full'>
                        <Link to='/'>
                            <p className='hover:text-red-500 hover:font-bold'><span><ion-icon name="close-outline" style={{ fontSize: '2.3rem', cursor: 'pointer' }}></ion-icon></span></p>
                        </Link>
                    </div>
                    <h1 className='text-4xl font-Poppins text-center pb-2'>Freelance Developer</h1>
                    <p className='font-Poppins text-base w-[26.5rem] text-center pl-10'>I am working as freelance web developer more than 1.5 years, I use to make full responsice website accroding to client need.</p>
                    <div className=' flex flex-col justify-start items-start pt-3 space-y-1'>
                        <p className='flex items-center justify-center font-Poppins px-2'><span className='pr-2'><ion-icon name="checkmark-done-circle-outline" style={{ fontSize: '2rem', paddingTop: '7px' }}></ion-icon></span>I make website layout according to user interface.</p>
                        <p className='flex items-center justify-center font-Poppins px-2'><span className='pr-2'><ion-icon name="checkmark-done-circle-outline" style={{ fontSize: '2rem', paddingTop: '7px' }}></ion-icon></span>I Using the fully responsive layout to website.</p>
                        <p className='flex items-center justify-center font-Poppins px-2'><span className='pr-2'><ion-icon name="checkmark-done-circle-outline" style={{ fontSize: '2rem', paddingTop: '7px' }}></ion-icon></span>I choose minimal & attractive color combination.</p>
                        <p className='flex items-center justify-center font-Poppins px-2'><span className='pr-2'><ion-icon name="checkmark-done-circle-outline" style={{ fontSize: '2rem', paddingTop: '7px' }}></ion-icon></span>I use modern CSS framworks to buil website.</p>
                        <p className='flex items-center justify-center font-Poppins px-2'><span className='pr-2'><ion-icon name="checkmark-done-circle-outline" style={{ fontSize: '2rem', paddingTop: '10px' }}></ion-icon></span>  <span className='pt-3'> I stay on the demanding user friendly layouts.</span></p>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Services_Freelance