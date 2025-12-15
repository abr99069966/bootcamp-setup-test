import { useState } from 'react'


import Products from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='min-h-screen bg-gray-100'>
      <Products/>
    </div>
    </>
  )
}

export default App
