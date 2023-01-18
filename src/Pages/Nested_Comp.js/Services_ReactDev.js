import { Link } from 'react-router-dom'
import React from 'react'

const Services_ReactDev = () => {
    return (
        <>

            <section className='h-[100vh] bg-slate-100 flex justify-center items-center'>
                <div className='h-[30rem] w-[32rem] bg-white rounded-3xl shadow-xl shadow-pink-400 px-7 py-4'>
                    <div className='flex justify-end  w-full'>
                        <Link to='/'>
                            <p className='hover:text-red-500'><span><ion-icon name="close-outline" style={{ fontSize: '2.3rem', cursor: 'pointer' }}></ion-icon></span></p>
                        </Link>
                    </div>
                    <h1 className='text-4xl font-Poppins text-center pb-2'>React Developer</h1>
                    <p className='font-Poppins text-base w-[26.5rem] text-center pl-10'>I am working with react more than 1.5 years, I use to make full functional bassed dynamic react website with smart routing as well.</p>
                    <div className=' flex flex-col justify-start items-start pt-3 space-y-1'>
                        <p className='flex items-center justify-center font-Poppins px-2'><span className='pr-2'><ion-icon name="checkmark-done-circle-outline" style={{ fontSize: '2rem', paddingTop:'7px' }}></ion-icon></span>I develop the user interface with react.</p>
                        <p className='flex items-center justify-center font-Poppins px-2'><span className='pr-2'><ion-icon name="checkmark-done-circle-outline" style={{ fontSize: '2rem', paddingTop:'7px' }}></ion-icon></span>I totaly uses the functional components.</p>
                        <p className='flex items-center justify-center font-Poppins px-2'><span className='pr-2'><ion-icon name="checkmark-done-circle-outline" style={{ fontSize: '2rem', paddingTop:'7px' }}></ion-icon></span>I make react website with dynamic routing.</p>
                        <p className='flex items-center justify-center font-Poppins px-2'><span className='pr-2'><ion-icon name="checkmark-done-circle-outline" style={{ fontSize: '2rem', paddingTop:'7px' }}></ion-icon></span>I also uses Redux to manage states smartly.</p>
                        <p className='flex items-center justify-center font-Poppins px-2'><span className='pr-2'><ion-icon name="checkmark-done-circle-outline" style={{ fontSize: '2rem'}}></ion-icon></span>  <span className='pt-3'> I create re-usable component with folder structure.</span></p>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Services_ReactDev