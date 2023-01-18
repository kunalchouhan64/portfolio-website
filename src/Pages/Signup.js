import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

    //Storing the input data into the useState
    const [inputval, setInputVal] = useState({
        name: '',
        email: '',
        password: '',
        confirmPass: ''
    });

    const onChangeHandler = (e) => {
        const { value, name } = e.target
        setInputVal(() => {
            return {
                ...inputval,
                [name]: value
            }
        })
    }

    const Signupbutton = (event) => {

        // Preventing the default Refesh
        event.preventDefault()
        // Form Validation Conditions
        const { name, email, password, confirmPass } = inputval;
        if (name === '') {
            alert('Name is Required !!')
        }
        else if (email === '') {
            alert('Email is Required !!')
        }
        else if (!email.includes('@gmail.com')) {
            alert('Enter Vailid Email Address !!')
        }
        else if (password < 5) {
            alert('Password Should Be Greater than 5 Character !!')
        }
        else if (confirmPass != password) {
            alert('Password & Confirm Password Should Be Same !!')
            return false
        } else {
            alert('You Have Signed Up Successfully....!!')
        }


        console.log(inputval);

    }


    return (
        <>
            <section className='h-[96vh] flex justify-center items-center'>
                <div className="wrapper h-[41rem] w-[33rem] shadow-xl shadow-pink-300 border-2 border-slate-600 rounded-3xl">
                    <h1 className='font-Poppins  flex justify-center py-3 text-white font-bold text-3xl rounded-t-3xl bg-slate-800'>Sign Up</h1>
                    <form action="" className='py-10 flex flex-col space-y-5 justify-center items-center  px-9'>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-Poppins pl-1 pb-1 text-lg'>Your Name</label>
                            <input type="text" name="name" id="fname" onChange={onChangeHandler} className='font-Poppins border-2 border-slate-600 w-96 py-3 px-4 rounded-xl ' placeholder='Your Full Name' required />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-Poppins pl-1 pb-1 text-lg'>Your Email</label>
                            <input type="email" name="email" id="email" onChange={onChangeHandler} className='font-Poppins border-2 border-slate-600 w-96 py-3 px-4 rounded-xl ' placeholder='Enter Your Email' required />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-Poppins pl-1 pb-1 text-lg'>Enter Password</label>
                            <input type="password" name="password" id="pass" onChange={onChangeHandler} className='font-Poppins border-2 border-slate-600 w-96 py-3 px-4 rounded-xl ' placeholder='Enter Password' required />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-Poppins pl-1 pb-1 text-lg'>Confirm Password</label>
                            <input type="password" name="confirmPass" id="confirmpass" onChange={onChangeHandler} className='font-Poppins border-2 border-slate-600 w-96 py-3 px-4 rounded-xl ' placeholder='Confirm Password' required />
                        </div>

                        <div className='pt-3 flex justify-center w-96 '>
                            <button onClick={Signupbutton} className='py-2 px-6 rounded-lg bg-slate-800 w-32 font-Poppins text-white text-lg font-semibold'>Sign Up</button>
                        </div>

                        <div>
                            <p className='text-lg font-Poppins'>Already Have An Account? <Link to='/login' className='underline text-sky-600 font-semibold'> SignIn</Link></p>
                        </div>

                    </form>
                </div>
            </section>
        </>

    )
}

export default Signup