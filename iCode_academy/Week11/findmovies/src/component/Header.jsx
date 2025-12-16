import { Search } from "lucide-react"

export const Header = () => {
  return ( 
    <>
      <div className='h-7 flex m-5 pl-20 pr-20 gap-10' >
        <div className='flex gap-4 items-center h-[26px]' >
          <img className='w-[26px] h-[26px] '
          src="images/logo.png" alt="logo" />
          <h1 className='text-white justify-center font-semibold '>FindMovies</h1>
        </div>
        <div className='h-7 w-[981px] flex items-center border rounded-lg bg-white gap-1 pl-1'>
          <Search size={18}
          className=" text-gray-400"/>
          <input className=' w-full bg-transparent' type="text" 
          placeholder='Search FindMovies'/>
        </div>
      </div>
    </>
  )
}











