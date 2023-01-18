import React from 'react'
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { Link } from 'react-router-dom';

const Services = () => {

    return (
        <>
            <section className='h-[100vh]  pt-14 bg-slate-50'>

                <div className="flex justify-center flex-col space-y-1 items-center">
                    <h1 className='text-5xl font-Poppins font-bold'>Services</h1>
                    <p className='font-Poppins text-base '>What i Offer</p>
                </div>

                <div className="3divwrapper flex justify-center gap-12 items-center h-[80vh]">
                    <Link to='/services/servicesreact'>
                        <div className='h-[22rem] w-[21rem] bg-white flex flex-col justify-center px-12 space-y-5 rounded-3xl shadow-xl shadow-pink-400 services_div cursor-pointer'  >
                            <span className='flex justify-start'><ion-icon name="logo-react" style={{ fontSize: '3rem' }}></ion-icon></span>
                            <h1 className='text-3xl font-Poppins w-32 font-semibold'>React Developer </h1>
                            <p className='space-x-3 font-Montserrat cursor-pointer'>Veiw More <span><ArrowRightAltOutlinedIcon /></span></p>
                        </div>
                    </Link>
                    <Link to='/services/servicesuiux'>
                        <div className='h-[22rem] w-[21rem] bg-white flex flex-col justify-center px-12 space-y-5 rounded-3xl shadow-xl shadow-pink-400 services_div cursor-pointer' >
                            <span className='flex justify-start'><ion-icon name="code-slash-outline" style={{ fontSize: '3rem' }}></ion-icon></span>
                            <h1 className='text-3xl font-Poppins w-32 font-semibold'>UI/UX Designer </h1>
                            <p className='space-x-3 font-Montserrat cursor-pointer'>Veiw More <span><ArrowRightAltOutlinedIcon /></span></p>
                        </div>
                    </Link>
                    <Link to='/services/servicesfreelance'>
                        <div className='h-[22rem] w-[21rem] bg-white flex flex-col justify-center px-12 space-y-5 rounded-3xl shadow-xl shadow-pink-400 services_div cursor-pointer' >
                            <span className='flex justify-start'><ion-icon name="desktop-outline" style={{ fontSize: '3rem' }}></ion-icon></span>
                            <h1 className='text-3xl font-Poppins w-32 font-semibold'>Freelance Developer </h1>
                            <p className='space-x-3 font-Montserrat cursor-pointer'>View More <span><ArrowRightAltOutlinedIcon /></span></p>
                        </div>
                    </Link>

                </div>

            </section>
            {/* ================= */}

            {/* <div className="overlay"></div> */}
            {/* 
            <section className='show_box'>

                <div className='shox_box_content'>
                    <div className='flex justify-end  w-full pb-5'>
                        <p><span><ion-icon name="close-outline"  style={{ fontSize: '2.3rem' , cursor: 'pointer' }}></ion-icon></span></p>
                    </div>
                    <h1 className='text-4xl font-Poppins'>React Developer</h1>
                    <p className='font-Poppins text-base w-96 text-center'>I am working with react more than 1.5 years, I use to make full functional bassed dynamic react website with smart routing as well.</p>
                    <div className=' flex flex-col justify-start items-start'>
                        <p className='flex items-center justify-center font-Poppins px-2'><span className='pr-2'><ion-icon name="checkmark-done-circle-outline" style={{ fontSize: '2rem' }}></ion-icon></span>I develop the user interface with react.</p>
                        <p className='flex items-center justify-center font-Poppins px-2'><span className='pr-2'><ion-icon name="checkmark-done-circle-outline" style={{ fontSize: '2rem' }}></ion-icon></span>I totaly uses the functional components.</p>
                        <p className='flex items-center justify-center font-Poppins px-2'><span className='pr-2'><ion-icon name="checkmark-done-circle-outline" style={{ fontSize: '2rem' }}></ion-icon></span>I make react website with dynamic routing.</p>
                        <p className='flex items-center justify-center font-Poppins px-2'><span className='pr-2'><ion-icon name="checkmark-done-circle-outline" style={{ fontSize: '2rem' }}></ion-icon></span>I also uses Redux to manage states smartly.</p>
                        <p className='flex items-center justify-center font-Poppins px-2'><span className='pr-2'><ion-icon name="checkmark-done-circle-outline" style={{ fontSize: '2rem' }}></ion-icon></span>I create re-usable component with folder structure.</p>

                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Services