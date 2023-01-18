import React from 'react'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CodeIcon from '@mui/icons-material/Code';

const Stats = () => {
    return (
        <section class=" body-font py-7">
            
            <div className='flex justify-center flex-col text-center space-y-1'>
                <h2 className='text-4xl font-Poppins'>Our Happy Stats</h2>
                <p className='font-Poppins'>See Our Impact</p>
            </div>

            <div class="container px-5 py-9 mx-auto">

                <div class="flex justify-evenly">

                    <div class="bg-red400 flex items-center space-x-4 ">
                        <div className='flex items-center'>
                            <PeopleOutlineIcon style={{ fontSize: '4.5rem' }} />
                            {/* <ion-icon name="people-outline"></ion-icon> */}
                        </div>
                        <div className='flex justify-center flex-col items-center'>
                            <h2 class="font-Poppins font-medium text-3xl text-gray-900">1K+</h2>
                            <p class="leading-relaxed font-Poppins">Happy Clients</p>
                        </div>

                    </div>

                    <div class=" flex items-center space-x-4">
                        <div className='flex items-center'>

                            <CodeIcon style={{ fontSize: '4.2rem' }} />
                            {/* <ion-icon name="code-slash-outline" ></ion-icon> */}
                        </div>
                        <div className='flex justify-center flex-col items-center'>
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">15+</h2>
                            <p class="leading-relaxed font-Poppins">Projects Done</p>
                        </div>

                    </div>

                    <div class=" flex items-center">
                        <div className='flex items-center'>
                            <ion-icon name="cafe-outline" style={{ fontSize: '4.2rem' }}></ion-icon>
                        </div>
                        <div>
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">500+</h2>
                            <p class="leading-relaxed font-Poppins">Coffee Cups</p>
                        </div>

                    </div>

                    <div class=" flex items-center">
                        <div className='flex items-center'>
                            <ion-icon name="cafe-outline" style={{ fontSize: '4.2rem' }}></ion-icon>
                        </div>
                        <div>
                            <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">1K+</h2>
                            <p class="leading-relaxed font-Poppins">Year's Of Exp</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Stats