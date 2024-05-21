import React from 'react'
import './App.css'
import Head from './Sections/Head/Head'
import NavBar from './Components/NavBar/NavBar'
import Menu from './Sections/Menu/Menu'
import Info from './Sections/Info/Info'
import Offers from './Sections/Offers/Offers'
import Pizza from './Sections/Pizza/Pizza'
import Subscribe from './Sections/Subscribe/Subscribe'
import About from './Sections/About/About'
import Contact from './Sections/Contact/Contact'

function App() {

  return (
    <>
      <NavBar/>
      <Head/>
      <Menu/>
      <Info/>
      <Offers/>
      <Pizza/>
      <About/>
      <Subscribe/>
      <Contact/>
    </>
  )
}

export default App
