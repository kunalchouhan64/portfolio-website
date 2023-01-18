import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const BackToTopBtn = () => {
    // const [isvisible, isSetVisible] = useState(false)

    const backtotop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    // const listenToScroll = () => {
    //     let hieghttohidden = 250
    //     const winnScroll =
    //         document.body.scrollTop || document.body.scrollTop;
    //     if (winnScroll > hieghttohidden) {
    //         isSetVisible(true)
    //     } else {
    //         isSetVisible(false)
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener("scroll", listenToScroll)

    // }, [])
    return (
        <>

            <div className='flex justify-end items-end px-10' onClick={backtotop}>
                
                    <button className='h-10 w-10 rounded-full bg-black z-50' >
                        <ArrowUpwardIcon className='animate-bounce' style={{ fontSize: '2.4rem', color: 'white' }} />
                    </button>
              
            </div>

        </>
    )
}

export default BackToTopBtn