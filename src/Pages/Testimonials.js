import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonials = () => {
    return (
        <>
            <div className="flex justify-center flex-col space-y-1 items-center pt-10">
                <h1 className='text-5xl font-Poppins font-bold'>Testimonials</h1>
                <p className='font-Poppins text-base '>What People Say</p>
            </div>

            <section className='h-[66vh] flex justify-center items-center'>

                <div className="wrapper flex justify-around items-center h-[60vh] gap-12">

                    <div className="left services_div h-72 w-96 space-y-3 rounded-3xl border border-slate-500 shadow-xl shadow-pink-300 bg-white flex py-6 justify-center items-center flex-col">
                        <FormatQuoteIcon style={{ fontSize: '2.4rem' }} />
                        <p className='text-center w-80 font-Poppins'>you know the best thing about kunal is that is never disspointed us about the work quality and the project delevery.</p>
                        <div className='flex space-x-3'>
                            <img className='h-16 rounded-full  border border-pink-500' src="\Images\portfolio\2.png" alt="" />
                            <div className="flex flex-col font-Poppins py-1 justify-center">
                                <h2 className='font-semibold text-[1rem]'>Arnav Chouhan</h2>
                                <p className='text-sm'>Backend Developer, Infosys</p>
                            </div>
                        </div>
                    </div>

                    <div className="left services_div h-72 w-96 space-y-3 rounded-3xl border border-slate-500 shadow-xl shadow-pink-300 bg-white flex py-6 justify-center items-center flex-col">
                        <FormatQuoteIcon style={{ fontSize: '2.4rem' }} />
                        <p className='text-center w-80 font-Poppins'>As UI/UX Designer i have to focus more on the user experience better and kunal is very well frontend developer to manage the ui/ux and user interfaces.</p>
                        <div className='flex space-x-3'>
                            <img className='h-16 rounded-full  border border-pink-500' src="\Images\portfolio\1.png" alt="" />
                            <div className="flex flex-col font-Poppins py-1 justify-center">
                                <h2 className='font-semibold text-[1rem]'>Natasha Sharma</h2>
                                <p className='text-sm font-Poppins'>UI/UX Designer, Apple</p>
                            </div>
                        </div>
                    </div>

                    <div className="left services_div h-72 w-96 space-y-3 rounded-3xl border border-slate-500 shadow-xl shadow-pink-300 bg-white flex py-6 justify-center items-center flex-col">
                        <FormatQuoteIcon style={{ fontSize: '2.4rem' }} />
                        <p className='text-center w-80 font-Poppins'>I am always appriciate kunal to giving us the best quality work, as a react frontend developer kunal also understand the requirment of work.</p>
                        <div className='flex space-x-3'>
                            <img className='h-16 rounded-full  border border-pink-500' src="\Images\portfolio\4.png" alt="" />
                            <div className="flex flex-col font-Poppins py-1 justify-center">
                                <h2 className='font-semibold'>William James</h2>
                                <p className='text-sm'>DevOps Eng, Microsoft</p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Testimonials