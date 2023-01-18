import React from 'react'
import { Link } from 'react-router-dom'

import LoginButton from './Loginbtn';

const Navbar = () => {


    return (
        <>
            <nav className='py-5 flex justify-around bg-slate-50 shadow-xl shadow-pink-200 items-center'>
                <Link to='/'>

                    <div className='font-Poppins font-bold text-black text-xl flex items-center'>
                        {/* <img src="\Images\logo.png" alt="" /> */}
                        KUNAL CHOUHAN
                    </div>
                </Link>
                <div className='flex space-x-9 font-Poppins font-[500] text-[1.11rem] items-center'>
                    <Link to='/' className='font-semibold'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/skills'>Skills</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/login'><LoginButton /></Link>
                    {/* <Link to='/signup' className='py-[0.43rem] px-3 shadow-lg shadow-pink-200 bg-slate-700 text-white font-Poppins rounded-xl'>SignUp</Link> */}
                    {/* <p className='flex justify-center items-center'>
                        <ion-icon name="moon-outline" onClick={nightHandler} className='cursor-pointer' style={{ fontSize: '1.5rem', cursor: 'pointer' }} id='night'></ion-icon>
                        <ion-icon name="sunny-outline" onClick={dayHandler} style={{ fontSize: '1.5rem', cursor: 'pointer' }} id='day' className='hide'></ion-icon>
                    </p> */}

                </div>
            </nav>
        </>
    )
}

export default Navbar