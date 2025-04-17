import { useState, useEffect } from 'react'
import Navbar from './components/navbar.jsx'
import Form from './components/form.jsx'
import './App.css'

function App() {
  const [showForm, setShowForm] = useState(false);

  const [cards, setCards] = useState([])

  const fetchData = async () => {
    let a = await fetch("/blogs.json") 
    let data = await a.json()
    setCards(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
        <Navbar onClick={() => setShowForm(true)} />
        {showForm && <Form />}
      <div className="flexbox min-h-screen justify-center m-[3%] flex flex-wrap gap-10">
      {cards.map((card)=>{
        return <div key={card.id} className="card w-[45%] h-[42vh] border-2 rounded-4xl p-5 shadow-xl shadow-blue-500/50 transform transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-3xl hover:shadow-blue-700">
          <div className="header flex justify-between items-center">
            <div className='text-2xl font-bold w-[80%] overflow-hidden whitespace-nowrap '>{card.title} </div>
            <div className='text-gray-400'>{card.date}</div>
          </div>
          <div className="line bg-gray-500 m-1 w-[90%] h-0.5 rounded-full justify-self-center"></div>
          <div className="mid flex justify-between">
            <div className='text-gray-600 font-semibold'>{card.genre}</div>
            <div className='text-gray-400 font-bold'>By {card.name}</div>
          </div>
          <div className="content mt-1 text-">{card.content}</div>
          <button className='hover:text-blue-600'>Read more...</button>
        </div>
      })}
      </div>
    </>
  )
}

export default App
