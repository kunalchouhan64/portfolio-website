import React from 'react'

const Qualification = () => {
    return (
        <>

            <section className="text-gray-400 h-[140vh] body-font  ">
                <div className='flex flex-col justify-center items-center text-black space-y-2'>
                    <p className='font-Poppins text-5xl font-bold '> Qualifications</p>
                    <p className='font-Poppins'>My Education & Experience</p>
                </div>

                <div className=" px-5 py-10 mx-auto flex flex-wrap">

                    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-[60vh] w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-[0.18rem] bg-pink-500 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-28  h-12 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black shadow-xl shadow-pink-200 text-white relative z-10 title-font font-medium text-sm">EDUCATION</div>
                        <div className="pl-3 flex sm:items-center items-center flex-col sm:flex-row">
                            <div className=" w-16 h-16 bg-black text-white rounded-full inline-flex items-center justify-center">
                                <ion-icon name="book-outline" style={{ fontSize: '2.5rem' }}></ion-icon>
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <div className="leading-relaxed">
                                    <ul className='font-Poppins text-slate-900 space-y-4 pt-2'>
                                        <li><span className='font-semibold font-Poppins py-1 px-3 bg-white shadow-2xl shadow-slate-400 rounded-3xl border-2 border-pink-500 '>2016-2018 : </span> <span className='pl-2'></span> Passed 12th Standerd with MP Board. </li>
                                        <li><span className='font-semibold font-Poppins py-1 px-3 bg-white shadow-2xl shadow-slate-400 rounded-3xl border-2 border-pink-500'>2018-2021 : </span><span className='pl-2'></span>Completed Graduation in B.Sc (CS) from DAVV. </li>
                                        <li><span className='font-semibold font-Poppins py-1 px-3 bg-white shadow-2xl shadow-slate-400 rounded-3xl border-2 border-pink-500'>2021-Current : </span><span className='pl-2'></span>Learning Frontend Development with ReactJS. </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-[0.18rem] bg-red-800 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-28  h-12 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black shadow-xl shadow-pink-200 text-white relative z-10 title-font font-medium text-sm">EXPERIENCE</div>
                        <div className=" pl-3 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className=" w-16 h-16 bg-black text-white rounded-full inline-flex items-center justify-center">
                                <ion-icon name="code-outline" style={{ fontSize: '2.3rem' }}></ion-icon>
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <div className="leading-relaxed">
                                    <ul className='font-Poppins text-black space-y-4 pt-2'>
                                        <li><span className='font-semibold font-Poppins py-1 px-3 bg-white shadow-2xl shadow-slate-400 rounded-3xl border-2 border-pink-500  '>As Web Developer: </span>  <span className='pl-3'></span>I have 1 Year of Experience In HTML5, CSS3 & JS (ES6)  </li>
                                        <li><span className='font-semibold font-Poppins py-1 px-3 bg-white shadow-2xl shadow-slate-400 rounded-3xl border-2 border-pink-500 '>As React Developer : </span> <span className='pl-3'>I make fully functional react website with Dynamic Routing.</span> </li>
                                        <li><span className='font-semibold font-Poppins py-1 px-3 bg-white shadow-2xl shadow-slate-400 rounded-3xl border-2 border-pink-500 '>As UI/UX Developer: </span> <span className='pl-3'>I make user friendly & responsive website with modern framworks.</span> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-[0.18rem] bg-gradient-to-t from-pink-600 to-cyan-500 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-28  h-11 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black shadow-xl shadow-pink-200 text-white relative z-10 text-[0.975rem] font-Poppins font-medium">DEVELOPER</div>
                        <div className=" pl-3 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className=" w-16 h-16 bg-black text-white rounded-full inline-flex items-center justify-center">
                                <ion-icon name="golf-outline" style={{ fontSize: '2.5rem' }}></ion-icon>
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <div className="leading-relaxed">
                                    <ul className='font-Poppins text-black space-y-4 pt-2'>
                                        <li><span className='font-semibold font-Poppins py-1 px-3 bg-white shadow-2xl shadow-slate-400 rounded-3xl border-2 border-pink-500 '>Frontend: </span> <span className='pl-3'> I have 1 Year of Experience In HTML5, CSS3 & JS (ES6)</span> </li>
                                        <li><span className='font-semibold font-Poppins py-1 px-3 bg-white shadow-2xl shadow-slate-400 rounded-3xl border-2 border-pink-500 '>As React Developer : </span> <span className='pl-3'>I make fully functional react website with Dynamic Routing. </span></li>
                                        <li><span className='font-semibold font-Poppins py-1 px-3 bg-white shadow-2xl shadow-slate-400 rounded-3xl border-2 border-pink-500 '>As UI/UX Developer: </span> <span className='pl-3'>I make user friendly & responsive website with modern framworks. </span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-[0.18rem] bg-gradient-to-t from-green-600 to-yellow-500 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-28  h-11 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black shadow-xl shadow-pink-200 text-white relative z-10 text-base font-Poppins">LEARNER</div>
                        <div className="pl-3 flex items-center flex-row">
                            <div className="w-16 h-16 bg-black text-white rounded-full inline-flex items-center justify-center">
                                <ion-icon name="golf-outline" style={{ fontSize: '2.5rem' }}></ion-icon>
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <div className="leading-relaxed">
                                    <ul className='font-Poppins text-black space-y-4 pt-2'>
                                        <li><span className='font-semibold font-Poppins py-1 px-3 bg-white shadow-2xl shadow-slate-400 rounded-3xl border-2 border-pink-500 '>As Developer: </span> <span className='pl-3'>  always want learn new technology to groww myself as Developer.</span> </li>
                                        <li><span className='font-semibold font-Poppins py-1 px-3 bg-white shadow-2xl shadow-slate-400 rounded-3xl border-2 border-pink-500 '>As Person : </span> <span className='pl-3'>As personal i also available to my desirable responsibility and work.</span></li>
                                        <li><span className='font-semibold font-Poppins py-1 px-3 bg-white shadow-2xl shadow-slate-400 rounded-3xl border-2 border-pink-500 '>As Leader: </span> <span className='pl-3'>I always make sure that my team mates (frineds) to with grow with myself.  </span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Qualification