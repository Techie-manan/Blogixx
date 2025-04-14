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
        <div className="card w-[45%] h-[42vh] border-2 rounded-4xl p-5 bg-gradient-to-r from-white to-blue-300">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eligendi suscipit dolorum excepturi. Qui esse pariatur sit nam nobis cum necessitatibus, eius facere magnam doloribus voluptates similique error eligendi? Mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta libero rem eum pariatur harum magni repellat suscipit et, nam modi saepe fuga architecto, fugiat esse sint tempora. Fugiat, quasi. Est?
          </div>
          <button className='hover:text-blue-600'>Read more..</button>
        </div>

      </div>
      <Form />
    </>
  )
}

export default App
