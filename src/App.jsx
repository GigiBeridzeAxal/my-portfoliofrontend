import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import BlackHole from './components/BlackHole'
import Main from './components/Main'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Hireme from './components/Hireme'
import WorkExperience from './components/WorkExperience'
import Copyright from './components/Copyright'

function App() {


  return (
    <>

    <Header></Header>
    <BlackHole></BlackHole>
    <Main></Main>
    <Projects></Projects>
    <WorkExperience></WorkExperience>
    <Skills></Skills>
    <Reviews></Reviews>
    <Contact></Contact>
    <br /><br />
    <Copyright></Copyright>
  
    </>
  )
}

export default App
