import { useState } from 'react'
import logoImage from "./files/logo.png"
import searchIcon from "./files/mingcute_search-line.png"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex'>
        <div className='flex gap-3 items-center h-[26px]' >
          <img className='w-[26px] h-[26px] '
          src={logoImage} alt="logo" />
          <h1 className='h-[14px] justify-center '>FindMovies</h1>
        </div>
        <div>
          <img src={searchIcon} alt="search" />
          <input type="text" />

        </div>
      </div>
    </>
  )
}

export default App
