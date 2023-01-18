import React from 'react'

const Portfolio = () => {
    return (
        <>
            {/* <section class="text-gray-400 body-font bg-gray900 px-20">
               
                <p className='text-5xl font-Poppins font-semibold text-center text-black'>My Portfolio</p>
                <p className='text-lg font-Poppins  text-center text-black'>Work I did</p>
                <div class="container px-5 py-24 mx-auto">

                    <div class="flex flex-wrap w-full mb-20">
                        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 class=" text-4xl font-medium font-Poppins mb-2 text-black w-[90%]">PORTFOLIO: Projects That I Worked On</h1>
                            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p class="lg:w-1/2 w-full leading-relaxed text-slate-900 text-opacity-90 font-Poppins">This is the projects that i made while i am learning the fundamental as well as core concept of frontend in the terms of Design, Layout and Logic Building. For me ReactJS is awesome Javascript liabrary to work with.</p>
                    </div>

                    <div class="flex flex-wrap gap-12 justify-center">


                        <div class="xl:w-1/4 services_div md:w-1/2 py-2 px-2s shadow-lg shadow-orange-500 h-[23.5rem] rounded-3xl">
                            <div class="bg-slate-200 bg-opacity-40 py-3 px-5 services_div rounded-3xl" >
                                <img class="h-32 rounded-xl w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                                <h2 class="text-lg text-orange-500 font-semibold font-Poppins mb-4">NIKE STORE</h2>
                                <p class="leading-relaxed text-base font-Poppins">In this project I've made the fully function Nike Store with add to cart facility with checkout..</p>
                                <div className='pt-4'>
                                    <button id='hero_btn' className=' py-1 rounded-xl px-3 text-xs bg-orange-500 text-white font-Montserrat font-semibold'>View Project<NearMeIcon className='text-xl hover:rotate-12' /></button>
                                </div>

                            </div>
                        </div>
                        <div class="xl:w-1/4 services_div md:w-1/2 py-2 px-2s shadow-lg shadow-orange-500 h-[23.5rem] rounded-3xl">
                            <div class="bg-slate-200 bg-opacity-40 py-3 px-5 services_div rounded-3xl" >
                                <img class="h-32 rounded-xl w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                                <h2 class="text-lg text-orange-500 font-semibold font-Poppins mb-4">NIKE STORE</h2>
                                <p class="leading-relaxed text-base font-Poppins">In this project I've made the fully function Nike Store with add to cart facility with checkout..</p>
                                <div className='pt-4'>
                                    <button id='hero_btn' className=' py-1 rounded-xl px-3 text-xs bg-orange-500 text-white font-Montserrat font-semibold'>View Project<NearMeIcon className='text-xl hover:rotate-12' /></button>
                                </div>

                            </div>
                        </div>
                        <div class="xl:w-1/4 services_div md:w-1/2 py-2 px-2s shadow-lg shadow-orange-500 h-[23.5rem] rounded-3xl">
                            <div class="bg-slate-200 bg-opacity-40 py-3 px-5 services_div rounded-3xl" >
                                <img class="h-32 rounded-xl w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                                <h2 class="text-lg text-orange-500 font-semibold font-Poppins mb-4">NIKE STORE</h2>
                                <p class="leading-relaxed text-base font-Poppins">In this project I've made the fully function Nike Store with add to cart facility with checkout..</p>
                                <div className='pt-4'>
                                    <button id='hero_btn' className=' py-1 rounded-xl px-3 text-xs bg-orange-500 text-white font-Montserrat font-semibold'>View Project<NearMeIcon className='text-xl hover:rotate-12' /></button>
                                </div>

                            </div>
                        </div>
                        <div class="xl:w-1/4 services_div md:w-1/2 py-2 px-2s shadow-lg shadow-orange-500 h-[23.5rem] rounded-3xl">
                            <div class="bg-slate-200 bg-opacity-40 py-3 px-5 services_div rounded-3xl" >
                                <img class="h-32 rounded-xl w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                                <h2 class="text-lg text-orange-500 font-semibold font-Poppins mb-4">NIKE STORE</h2>
                                <p class="leading-relaxed text-base font-Poppins">In this project I've made the fully function Nike Store with add to cart facility with checkout..</p>
                                <div className='pt-4'>
                                    <button id='hero_btn' className=' py-1 rounded-xl px-3 text-xs bg-orange-500 text-white font-Montserrat font-semibold'>View Project<NearMeIcon className='text-xl hover:rotate-12' /></button>
                                </div>

                            </div>
                        </div>
                        <div class="xl:w-1/4 services_div md:w-1/2 py-2 px-2s shadow-lg shadow-orange-500 h-[23.5rem] rounded-3xl">
                            <div class="bg-slate-200 bg-opacity-40 py-3 px-5 services_div rounded-3xl" >
                                <img class="h-32 rounded-xl w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                                <h2 class="text-lg text-orange-500 font-semibold font-Poppins mb-4">NIKE STORE</h2>
                                <p class="leading-relaxed text-base font-Poppins">In this project I've made the fully function Nike Store with add to cart facility with checkout..</p>
                                <div className='pt-4'>
                                    <button id='hero_btn' className=' py-1 rounded-xl px-3 text-xs bg-orange-500 text-white font-Montserrat font-semibold'>View Project<NearMeIcon className='text-xl hover:rotate-12' /></button>
                                </div>

                            </div>
                        </div>
                        <div class="xl:w-1/4 services_div md:w-1/2 py-2 px-2s shadow-lg shadow-orange-500 h-[23.5rem] rounded-3xl">
                            <div class="bg-slate-200 bg-opacity-40 py-3 px-5 services_div rounded-3xl" >
                                <img class="h-32 rounded-xl w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
                                <h2 class="text-lg text-orange-500 font-semibold font-Poppins mb-4">NIKE STORE</h2>
                                <p class="leading-relaxed text-base font-Poppins">In this project I've made the fully function Nike Store with add to cart facility with checkout..</p>
                                <div className='pt-4'>
                                    <button id='hero_btn' className=' py-1 rounded-xl px-3 text-xs bg-orange-500 text-white font-Montserrat font-semibold'>View Project<NearMeIcon className='text-xl hover:rotate-12' /></button>
                                </div>

                            </div>
                        </div>



                    </div>


                </div>
            </section> */}

            <section class=" bg-white body-font px-20 pt-10">
                <div className='text-center'>
                    <h2 className='text-5xl font-Poppins text-black'>My Portfolio</h2>
                    <p className='text-lg font-Poppins'>Work I Did</p>
                </div>
                <div class="container px-5 py-20 mx-auto">

                    <div class="flex flex-col">
                        <div class="h-1 bg-white rounded overflow-hidden">
                            <div class="w-80 h-full bg-red-500"></div>
                        </div>
                        <div class="flex justify-between flex-wrap sm:flex-row flex-col py-6 mb-12">
                            <h1 class="w-80 text-slate-800 font-Poppins title-font text-4xl mb-2 sm:mb-0 font-semibold ">My Projects That I've Worked</h1>
                            <p class="sm:w-3/5 leading-relaxed text-lg font-Poppins text-slate-900 sm:pl-10 pl-0">This is the project that i made while i learning and enjoying the jourey of the learning React Frontend Development and You Know <span className='font-semibold font-Poppins'> I Just loved it!!!</span>.</p>
                        </div>
                    </div>

                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

                        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div class="rounded-lg h-48 w-80 overflow-hidden  border-2 border-r-slate-500 shadow-xl shadow-pink-400">
                                <img alt="content" class="object-cover object-center  h-full w-full" src="\Images\portfolio\folio.PNG" />
                            </div>
                            <h2 class="text-xl  font-bold title-font text-slate-900 mt-5 font-Poppins">Personal Portfolio</h2>
                            <p class="text-base leading-relaxed mt-2 text-slate-800 font-Poppins">In this project i've made my personal fortfolio website, that showcase my Skills as well as my Qualifications & Experience as well.</p>
                            
                            <a  href="https://kimo-clone.netlify.app/" target='_blank' class="text-pink-500 inline-flex items-center mt-3 font-Poppins font-bold">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>

                        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div class="rounded-lg h-48 w-80 overflow-hidden  border-2 border-r-slate-500 shadow-xl shadow-orange-400">
                                <img alt="content" class="object-cover object-center h-full w-full" src="\Images\portfolio\eshop.PNG" />
                            </div>
                            <h2 class="text-xl  font-bold title-font text-slate-900 mt-5 font-Poppins">E-Commerce</h2>
                            <p class="text-base leading-relaxed mt-2 text-slate-800 font-Poppins">In this project i've made a E-Commerce website of electronics items and accesories, it is fully function as other e-commerce website.</p>
                            <a  href="https://kunal-e-shop.netlify.app/" target='_blank' class="text-orange-500 inline-flex items-center mt-3 font-Poppins font-bold">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>

                        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div class="rounded-lg h-48 w-80 overflow-hidden  border-2 border-r-slate-500 shadow-xl shadow-violet-400">
                                <img alt="content" class="object-cover object-center h-full w-full" src="\Images\portfolio\landing.png" />
                            </div>
                            <h2 class="text-xl title-font text-slate-900 mt-5  font-Poppins font-bold">Landing Page</h2>
                            <p class="text-base leading-relaxed mt-2 text-slate-800 font-Poppins">In this project i've made a Landing page for a simple business, this Landing page presents the business for getting more leads for their business.</p>
                            <a href="https://mebank-project.netlify.app/" target='_blank' class="text-violet-600 inline-flex items-center mt-3 font-Poppins font-bold">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>

                        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div class="rounded-lg h-48 w-80 overflow-hidden  border-2 border-r-slate-500 shadow-xl shadow-yellow-400">
                                <img alt="content" class="object-cover object-center h-full w-full" src="\Images\portfolio\cta.jpg" />
                            </div>
                            <h2 class="text-xl  font-bold title-font text-slate-900 mt-5 font-Poppins">CTA Page</h2>
                            <p class="text-base leading-relaxed mt-2 text-slate-800 font-Poppins">Basically in this project i've made a simple Call To Action (CTA) page for small business or startup to get thier hot cleint on their petential customers.</p>
                            <a class="text-red-400 inline-flex items-center mt-3 font-Poppins font-bold">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>

                        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div class="rounded-lg h-48 w-80 overflow-hidden  border-2 border-r-slate-500 shadow-xl shadow-green-400">
                                <img alt="content" class="object-cover object-center h-full w-full" src="\Images\portfolio\ecpmmerce.jpg" />
                            </div>
                            <h2 class="text-xl  font-bold title-font text-slate-900 mt-5 font-Poppins">E-Commerce</h2>
                            <p class="text-base leading-relaxed mt-2 text-slate-800 font-Poppins">In this project i have made the simple e commerce website that exactly looks and works like a reac fully functional e commerce website</p>
                            <a class="text-green-500 inline-flex items-center mt-3 font-Poppins font-bold">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>

                        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                            <div class="rounded-lg h-48 w-80 overflow-hidden  border-2 border-r-slate-500  shadow-xl shadow-slate-600">
                                <img alt="content" class="object-cover object-center h-full w-full" src="\Images\portfolio\business1.png" />
                            </div>
                            <h2 class="text-xl  font-bold title-font text-slate-900 mt-5  font-Poppins">Business Page</h2>
                            <p class="text-base leading-relaxed mt-2 text-slate-800 font-Poppins">Basically in this project i have made the simple page for the small businss or startup to get their leads to scale their business.</p>
                            <a class="text-slate-800 inline-flex items-center mt-3 font-Poppins font-bold">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>


                    </div>
                </div>
            </section>

        </>
    )
}

export default Portfolio