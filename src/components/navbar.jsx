import React from 'react'

const navbar = () => {
  return (
    <>
        <nav className=" nav bg-white shadow-md m-5 px-4 py-3 rounded-full flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold flex text-blue-600">
        <img src="src\assets\logo.png" width={40} />
        Blogixx
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
      <button className="bg-blue-600 text-white px-10 py-2 rounded-full hover:bg-blue-700 transition">
        Add Blog
      </button>
    </nav>
    </>
  )
}

export default navbar
