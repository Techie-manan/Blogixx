import React from 'react'
import Form from './form.jsx'

const navbar = ({onClick}) => {
  // const [showForm, setShowForm] = useState(false);
  return (
    <>
        <nav className=" nav bg-white shadow-md m-5 px-4 py-3 rounded-full flex items-center justify-between bg-gradient-to-r from-white to-blue-500">
      {/* Logo */}
      <div className="flex">
        <img src="src\assets\logo1.png" width={30} />
        <div className="text-2xl font-bold  text-blue-600 mx-1">Blogixx</div>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-4 max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Add Button */}
      <button onClick={onClick} className="bg-blue-600 text-white px-10 py-2 rounded-full hover:bg-blue-800 transition"  >
        Add Blog
      </button>

    </nav>
    </>
  )
}

export default navbar
