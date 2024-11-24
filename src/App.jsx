import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to my Website</h1>
      <button className="bg-orange-600 text-white px-3 py-1 rounded-full shadow-lg">Hire Me</button>
    </>
  )
}

export default App
