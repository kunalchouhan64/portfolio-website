import React from 'react'
// import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <>

            <section className='h-[100vh]  pt-14 bg-slate-50'>
                <div className="flex justify-center flex-col items-center">
                    <h1 className='text-5xl font-Poppins font-bold'>About Me</h1>
                    <p className='font-Poppins text-base '>My Introduction</p>
                </div>

                <div className="wrapper gap-32  flex justify-center items-center h-[80vh]">

                    <div className="img">
                        <img className='h-[26rem] rounded-3xl shadow-xl shadow-pink-300' id='about_img' src="\Images\hero_img.jpg" alt="" />
                    </div>

                    <div className="stats space-y-8">


                        <div className="icon_stats flex space-x-4">
                            <div className='h-36 w-40 bg-white border-2 shadow-lg shadow-slate-400 border-slate-500 rounded-xl space-y-2 flex justify-center items-center flex-col' id='about_div'>
                                <span><WorkspacePremiumOutlinedIcon className='animate-bounce' style={{ fontSize: '2.2rem' }} /></span>
                                <h3 className='text-lg font-semibold font-Poppins'>Experience</h3>
                                <p className='text-sm font-Poppins'>1+ Years</p>
                            </div>
                            <div className='h-36 w-40 bg-white border-2 shadow-lg shadow-slate-400 border-slate-500 rounded-xl space-y-2 flex justify-center items-center flex-col' id='about_div'>
                                <span><BusinessCenterOutlinedIcon className='animate-bounce' style={{ fontSize: '2.2rem' }} /></span>
                                <h3 className='text-lg font-semibold font-Poppins'>Completed</h3>
                                <p className='text-sm font-Poppins'>1+ Years</p>
                            </div>
                            <div className='h-36 w-40 bg-white border-2 shadow-lg shadow-slate-400 border-slate-500 rounded-xl space-y-2 flex justify-center items-center flex-col' id='about_div'>
                                <span><HeadsetMicOutlinedIcon className='animate-bounce' style={{ fontSize: '2.2rem' }} /></span>
                                <h3 className='text-lg font-semibold font-Poppins'>Support</h3>
                                <p className='text-sm font-Poppins'>1+ Years</p>
                            </div>


                        </div>


                        <div className='w-[30rem] text-lg font-Poppins'><p>Frontend react developer, I create those website that you can imagine with beautiful UI/UX user interface, i have tons of experience about building websites for Our thousands of Happy Clients.</p></div>
                        <div>
                            <a href='\Images\Balma.wav' download='\Images\Balma.wav' >
                                <button className='bg-black py-2 px-5 border-2 shadow-xl shadow-slate-500 text-white font-Poppins rounded-2xl' id='about_btn'>Download CV <span> <TextSnippetOutlinedIcon className='pl-2 animate-bounce' style={{ fontSize: '2.7rem' }} /></span></button>
                            </a>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default About