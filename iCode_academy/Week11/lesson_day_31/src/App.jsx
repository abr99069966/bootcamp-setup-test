import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile'
import { Header } from './component/Header'


function App() {
  let name = "Ankhbayar";
  let element = (<h1 className='text-blue-500'>Hello , {name}</h1>)

  return (
    <>
    <Header/>
    <h1 className='text-center text text-5xl font-semibold text-red-600'>Hello react</h1>
    {element}
    <div>
      <Profile img={"images/download (1).jpeg"} name={"Sabrina"} age={"25"} gender={"male"} email={"Sabirna@gmail.com"}/>
      <Profile img={"images/download.jpeg"} name={"John"} age={"34"} gender={"male"} email={"John@gmail.com"}/>
      <Profile img={"images/images.jpeg"} name={"George"} age={"45"} gender={"male"} email={"george@gmail.com"}/>
    </div>
    </>
  )
}

export default App
