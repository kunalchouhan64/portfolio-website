import React, { useState } from 'react'
import NearMeIcon from '@mui/icons-material/NearMe';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [showaftercontact, setShowAfterContact] = useState(false)
    const [hidecontact, setSContact] = useState(true)

    //On Submit Handler
    const OnSubmitHandler = (event) => {
        event.preventDefault()
        if (name == '') {
            alert('Please Enter Name')

        }

        else if (email == '') {
            alert('Please Enter Email')
        }

        else if (message == '') {
            alert('Please Enter Messages')
        }

        else {
            const data = {
                userName: name,
                userEmail: email,
                userMessage: message
            }
            setName('')
            setEmail('')
            setMessage('')
            console.log(data);
            setSContact(false)
            setShowAfterContact(true)
        }

    }


    return (
        <>
            {showaftercontact &&
                <section className='h-[69vh] flex justify-center items-center'>

                    <div className='h-96 w-[38rem] flex shadow-xl shadow-slate-500 border border-slate-500 rounded-xl p-7 flex-col items-center space-y-5'>
                        <ion-icon style={{ fontSize: '3rem' }} name="happy-outline"></ion-icon>
                        <h2 className='text-2xl font-Poppins font-semibold'>Thank You</h2>
                        <p className='font-Poppins text-lg w-4/6 text-center'>Hey{name}...We Are Glad That You Are Try To Reaching Out us... We Will Be Right Back To You Shortly, Thank You</p>
                        <Link to='/anotherhome'>
                            <button className=' services_div py-2 rounded-xl px-3 shadow-xl shadow-gray-400 text-xl bg-black text-white font-Poppins font-semibold'>
                                < KeyboardBackspaceIcon />  Back
                            </button>
                        </Link>
                    </div>

                </section>}

            {/* Hiding Contact After Submitting  */}
            {hidecontact &&
                <section className='h-[118vh] bg-white py-5'>
                    <div className='text-center'>
                        <h2 className='text-4xl font-Poppins'>Contact Me</h2>
                        <p className='text-lg font-Poppins'>Hire For Work</p>
                    </div>

                    <div className="wrapper h-[92vh] flex gap-6 justify-center pt-12">
                        {/* Left Icons  */}
                        <div className="icons h-[92vh] w-[50vh] bg-red500 flex flex-col space-y-3 px-5 pt-2">
                            <h2 className='text-center font-Poppins text-2xl font-semibold'>Talk To Me</h2>
                            <div className="mail h-44 w-72 rounded-2xl border shadow-xl shadow-slate-300 border-slate-500 flex justify-center flex-col items-center services_div">
                                <div className='flex justify-center flex-col items-center'>

                                    {/* <EmailIcon style={{ fontSize: '2.6rem' }} /> */}
                                    <ion-icon name="mail-unread-outline" style={{ fontSize: '2.5rem' }}></ion-icon>
                                    <h3 className='font-Poppins font-semibold text-lg'>Email</h3>
                                    <p className='font-Poppins'>kunalchouhan@gmail.com</p>
                                </div>
                                <div className='text-lg font-Poppins pt-3'>
                                    <a href='mailto:kunalchouhan6416@email.com' target='_blank' >Write Me <ArrowForwardIcon style={{ fontSize: '1.3rem' }} /></a>
                                </div>
                            </div>
                            <div className="mail h-44 w-72 rounded-2xl border shadow-xl shadow-slate-300 border-slate-500 flex justify-center flex-col items-center services_div">
                                <div className='flex justify-center flex-col items-center'>

                                    {/* <EmailIcon style={{ fontSize: '2.6rem' }} /> */}
                                    <ion-icon name="logo-whatsapp" style={{ fontSize: '2.4rem' }}></ion-icon>
                                    <h3 className='font-Poppins font-semibold text-lg'>WhatsApp</h3>
                                    <p className='font-Poppins'>+91-62615-25833</p>
                                </div>
                                <div className='text-lg font-Poppins pt-3'>
                                    <a href="https://web.whatsapp.com" target="_blank">Write Me</a>
                                    <ArrowForwardIcon style={{ fontSize: '1.3rem' }} />
                                </div>
                            </div>
                            <div className="mail h-44 w-72 rounded-2xl border shadow-xl shadow-slate-300 border-slate-500 flex justify-center flex-col items-center services_div">
                                <div className='flex justify-center flex-col items-center'>

                                    <MapsUgcIcon style={{ fontSize: '2.4rem' }} />
                                    {/* <ion-icon name="mail-unread-outline" style={{fontSize:'2.8rem'}}></ion-icon> */}
                                    <h3 className='font-Poppins font-semibold text-lg'>Messanger</h3>
                                    <p className='font-Poppins'>@kunalchouhan</p>
                                </div>
                                <div className='text-lg font-Poppins pt-3'>
                                    <Link>Write Me <ArrowForwardIcon style={{ fontSize: '1.3rem' }} /></Link>
                                </div>
                            </div>
                        </div>
                        {/* Input Form  */}
                        <div className="inputs h-[84vh] w-[70vh] flex flex-col items-center space-y-6 px-5 pt-1       ">
                            {/* <form action="https://formspree.io/f/xknedake"> */}

                            <h2 className='text-center font-Poppins text-2xl font-semibold'>Write Me Your Project</h2>
                            <input className='py-4 rounded-2xl px-6 font-Poppins w-[25.5rem] border-2 border-slate-600 services_div' type="text" name="" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' />

                            <input className='py-4 rounded-2xl px-6 font-Poppins w-[25.5rem] border-2 border-slate-600 services_div' type="email" name="" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email' />

                            <textarea className='py-4 rounded-2xl px-6 font-Poppins w-[25.5rem] border-2 border-slate-600 text-black services_div' name="" value={message} onChange={(e) => setMessage(e.target.value)} id="message" placeholder='Write Something About Your Project...' cols="55" rows="25"></textarea>

                            <div className='flex justify-start w-[25.5rem]'>
                                <Link to='/contactshow'>
                                    <button id='hero_btn' onClick={OnSubmitHandler} className=' py-4 rounded-xl px-6 shadow-xl shadow-gray-400 text-base bg-black text-white font-Montserrat font-semibold'>Send Message <NearMeIcon className='text-2xl hover:rotate-12' /></button>
                                </Link>
                            </div>
                            {/* </form> */}
                        </div>
                    </div>
                </section>
            }

        </>
    )
}

export default Contact