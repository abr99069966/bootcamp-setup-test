import { useState } from 'react'
import logoImage from "./files/logo.png"
import searchIcon from "./files/mingcute_search-line.png"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-7 flex m-5 pl-20 pr-20 gap-10' >
        <div className='flex gap-3 items-center h-[26px]' >
          <img className='w-[26px] h-[26px] '
          src={logoImage} alt="logo" />
          <h1 className='text-white h-[14px] justify-center font-semibold '>FindMovies</h1>
        </div>
        <div className=' h-7 w-[981] flex border rounded-lg bg-white '>
          <img className='m-1' src={searchIcon} alt="search" />
          <input type="text" 
          placeholder='Search FindMovies'
          />

        </div>
      </div>
    </>
  )
}

export default App
