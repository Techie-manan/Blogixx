import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="box min-h-screen m-5 border-2 flex flex-wrap gap-[5%]">
        <div className="card w-1/2 h-[40vh] border-2 rounded-4xl p-5 ">
          <div className="header flex justify-between items-center">
            <div className='text-2xl font-bold w-[80%] overflow-hidden whitespace-nowrap '>title </div>
            <div className='text-gray-400'>Date</div>
          </div>
          <div className="line bg-gray-500 m-1 w-[90%] h-0.5 rounded-full justify-self-center"></div>
          <div className="mid flex justify-between">
            <div className='text-gray-600'>genre</div>
            <div className='text-gray-400 font-bold'>By name</div>
          </div>
          <div className="content ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad laudantium quos dolores hic amet unde, quia odio maiores ullam tempore labore alias eum blanditiis at officiis, vel enim esse vitae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eligendi suscipit dolorum excepturi. Qui esse pariatur sit nam nobis cum necessitatibus, eius facere magnam doloribus voluptates similique error eligendi? Mollitia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta libero rem eum pariatur harum magni repellat suscipit et, nam modi saepe fuga architecto, fugiat esse sint tempora. Fugiat, quasi. Est?
          </div>
          <button>Read more</button>
        </div>
        </div>
      </>
      )
}

      export default App
