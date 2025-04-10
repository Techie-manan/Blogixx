import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="box">
        <div className="card">

        </div>
      </div>
    </>
  )
}

export default App
