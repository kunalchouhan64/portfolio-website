import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import NearMeIcon from '@mui/icons-material/NearMe';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';

const Hero = () => {
    return (
        <>
            <section className='h-[100vh]'>
                <div className="hero_wrapper h-[80vh] flex justify-between items-center px-52">
                    <div className="icon_div flex flex-col space-y-6 h-32">

                        <InstagramIcon style={{ height: '2rem', width: '1.8rem' }} />

                        <a href="https://www.linkedin.com/in/kunal-chouhan-35906b222/" target='_blank'>
                            <LinkedInIcon style={{ height: '2rem', width: '1.8rem' }} />
                        </a>

                        <a href="https://github.com/kunalchouhan64" target='_blank'>
                            <GitHubIcon style={{ height: '2rem', width: '1.8rem' }} />
                        </a>



                    </div>
                    <div className="text_div h-60 w-[32rem]">
                        <h1 className='text-6xl font-Poppins font-bold'>Kunal Chouhan</h1>
                        <p className='text-[1.22rem] pt-2 font-Montserrat flex justify-end w-[29rem] text-gradient font-semibold ' >React Developer</p>
                        <div className='pt-4 font-Poppins text-lg'>
                            <p>Hello.. My name is kunal chouhan and i am Front-End React Developer. I am passonate react frontend developer. love of Coffee.</p>
                        </div>
                        <div className='pt-11'>
                            <button id='hero_btn' className=' py-4 rounded-xl px-6 shadow-xl shadow-gray-400 text-xl bg-black text-white font-Montserrat font-semibold'>Say Hello <NearMeIcon className='text-2xl hover:rotate-12' /></button>
                        </div>
                    </div>
                    <div className="img_div">
                        <img id='Hero_Img' className='h-[24rem] rounded-full shadow-xl shadow-pink-300 border-4 border-violet-400' src="\Images\hero_img.jpg" alt="" />

                    </div>
                </div>
                <div>
                    <p className='flex space-x-3 pl-[21rem]'>
                        <span className='flex space-x-3 items-center'> <img className='h-16 hover:uppercase' src="\Images\mouse_outline.png" alt="" /> <span className='font-Poppins'>Scroll Down</span>  <span><KeyboardDoubleArrowDownOutlinedIcon className='animate-bounce' style={{ fontSize: '2rem' }} /></span> </span>
                    </p>

                </div>
            </section>
        </>
    )
}

export default Hero