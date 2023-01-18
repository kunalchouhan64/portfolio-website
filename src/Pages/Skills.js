import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';

const Skills = () => {
    
    return (
        <>
            <section className='h-[100vh]  pt-14 bg-slate-50'>

                <div className="flex justify-center flex-col space-y-1 items-center">
                    <h1 className='text-5xl font-Poppins font-bold'>Skills</h1>
                    <p className='font-Poppins text-base '>My Technical Lavel</p>
                </div>

                <div className="3divwrapper flex justify-center gap-12 items-center h-[80vh]">

                    <div className='h-[26rem] w-[28rem] bg-white flex flex-col py-7 px-12 space-y-5 rounded-3xl shadow-xl shadow-pink-400 services_div'>
                        <div className="heading flex justify-center text-[1.38rem] font-Montserrat font-[600]"><h1>Frontend Developer</h1></div>
                        <div className="2divwrapper flex justify-between gap-8 items-center">

                            <div className='bg-red- h-56 w-44 space-y-8 pt-10'>


                                <div>
                                    <p className='flex items-center font-Poppins text-lg font-semibold'> <span className='flex justify-start'><VerifiedIcon className='pr-2' style={{ fontSize: '2.2rem' }} /></span>HTML</p>
                                    <p className='text-xs pl-8 font-Poppins'>Moderate</p>
                                </div>
                                <div>
                                    <p className='flex items-center font-Poppins text-lg font-semibold'> <span className='flex justify-start'><VerifiedIcon className='pr-2' style={{ fontSize: '2.2rem' }} /></span>CSS</p>
                                    <p className='text-xs pl-8 font-Poppins'>Advance</p>
                                </div>
                                <div>
                                    <p className='flex items-center font-Poppins text-lg font-semibold'> <span className='flex justify-start'><VerifiedIcon className='pr-2' style={{ fontSize: '2.2rem' }} /></span>JAVASCRIPT</p>
                                    <p className='text-xs pl-8 font-Poppins'>Intermediate</p>
                                </div>


                            </div>

                            <div className=' h-56 w-44 space-y-8 pt-10'>

                                <div>
                                    <p className='flex items-center font-Poppins text-lg font-semibold'> <span className='flex justify-start'><VerifiedIcon className='pr-2' style={{ fontSize: '2.2rem' }} /></span>REACT</p>
                                    <p className='text-xs pl-8 font-Poppins'>Intermediate</p>
                                </div>
                                <div>
                                    <p className='flex items-center font-Poppins text-lg font-semibold'> <span className='flex justify-start'><VerifiedIcon className='pr-2' style={{ fontSize: '2.2rem' }} /></span>BOOTSTRAP 5</p>
                                    <p className='text-xs pl-8 font-Poppins'>Advance</p>
                                </div>
                                <div>
                                    <p className='flex items-center font-Poppins text-lg font-semibold'> <span className='flex justify-start'><VerifiedIcon className='pr-2' style={{ fontSize: '2.2rem' }} /></span>GITHUB</p>
                                    <p className='text-xs pl-8 font-Poppins'>Intermediate</p>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className='h-[26rem] w-[28rem] bg-white flex flex-col py-7 px-12 space-y-5 rounded-3xl shadow-xl shadow-pink-400 services_div'>
                        <div className="heading flex justify-center text-[1.38rem] font-Montserrat font-[600]">  <h1>UI/UX Designer</h1></div>
                        <div className="2divwrapper flex justify-between gap-9 items-center">

                            <div className='bg-red- h-56 w-44 space-y-8 pt-10'>


                                <div>
                                    <p className='flex items-center font-Poppins text-lg font-semibold'> <span className='flex justify-start'><VerifiedIcon className='pr-2' style={{ fontSize: '2.2rem' }} /></span>MATERIAL UI</p>
                                    <p className='text-xs pl-8 font-Poppins'>Moderate</p>
                                </div>
                                <div>
                                    <p className='flex items-center font-Poppins text-lg font-semibold'> <span className='flex justify-start'><VerifiedIcon className='pr-2' style={{ fontSize: '2.2rem' }} /></span>TAILWIND CSS</p>
                                    <p className='text-xs pl-8 font-Poppins'>Advance</p>
                                </div>
                                <div>
                                    <p className='flex items-center font-Poppins text-lg font-semibold'> <span className='flex justify-start'><VerifiedIcon className='pr-2' style={{ fontSize: '2.2rem' }} /></span>TAILBLOCKS</p>
                                    <p className='text-xs pl-8 font-Poppins'>Intermediate</p>
                                </div>


                            </div>

                            <div className=' h-56 w-44 space-y-8 pt-10'>

                                <div>
                                    <p className='flex items-center font-Poppins text-lg font-semibold'> <span className='flex justify-start'><VerifiedIcon className='pr-2' style={{ fontSize: '2.2rem' }} /></span>PHOTOSHOP</p>
                                    <p className='text-xs pl-8 font-Poppins'>Intermediate</p>
                                </div>
                                <div>
                                    <p className='flex items-center font-Poppins text-lg font-semibold'> <span className='flex justify-start'><VerifiedIcon className='pr-2' style={{ fontSize: '2.2rem' }} /></span>FIGMA </p>
                                    <p className='text-xs pl-8 font-Poppins'>Advance</p>
                                </div>
                                <div>
                                    <p className='flex items-center font-Poppins text-lg font-semibold'> <span className='flex justify-start'><VerifiedIcon className='pr-2' style={{ fontSize: '2.2rem' }} /></span>NEXT JS</p>
                                    <p className='text-xs pl-8 font-Poppins'>Intermediate</p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Skills