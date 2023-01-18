import React from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services_ReactDev from './Pages/Nested_Comp.js/Services_ReactDev'
import { Services_Ui } from './Pages/Nested_Comp.js/Services_Ui'
import Services_Freelance from './Pages/Nested_Comp.js/Services_Freelance'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Skills from './Pages/Skills'
import Portfolio from './Pages/Portfolio'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import ContactShow from './Pages/ContactShow'
import AnotherHome from './Pages/AnotherHome'


const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/anotherhome' element={<AnotherHome />} />

        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contactshow' element={<ContactShow />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/services' element={<Services />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/services/servicesreact' element={<Services_ReactDev />} />
        <Route path='/services/servicesuiux' element={<Services_Ui />} />
        <Route path='/services/servicesfreelance' element={<Services_Freelance />} />
      </Routes>
      {/* <BackToTopBtn /> */}
    </>
  )
}

export default App
