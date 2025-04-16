import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import Form from './components/form.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="box min-h-screen justify-center m-[3%] flex flex-wrap gap-10">
        <div className="card w-[45%] h-[42vh] border-2 rounded-4xl p-5 shadow-xl shadow-blue-500/50">
          <div className="header flex justify-between items-center">
            <div className='text-2xl font-bold w-[80%] overflow-hidden whitespace-nowrap '>Title </div>
            <div className='text-gray-400'>Date</div>
          </div>
          <div className="line bg-gray-500 m-1 w-[90%] h-0.5 rounded-full justify-self-center"></div>
          <div className="mid flex justify-between">
            <div className='text-gray-600 font-semibold'>Genre</div>
            <div className='text-gray-400 font-bold'>By name</div>
          </div>
          <div className="content mt-1 text-">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad laudantium quos dolores hic amet unde, quia odio maiores ullam tempore labore alias eum blanditiis at officiis, vel enim esse vitae.
          </div>
          <button className='hover:text-blue-600'>Read more..</button>
        </div>

      </div>
      {/* <Form /> */}
    </>
  )
}

export default App
