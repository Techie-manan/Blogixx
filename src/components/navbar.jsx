import React from 'react'

const navbar = () => {
  return (
    <>
      <nav className='w-[90vw] h-[10vh] border-b-1  border-gray-200 p-50  rounded-full bg-gray-50'>
        <ul className='flex justify-between items-center'>
          <li className='inline-block px-4 py-2 text-gray-700 hover:text-gray-900'>Logo</li>
          <li className='inline-block px-4 py-2 text-gray-700 hover:text-gray-900'>Search</li>
          <li className='inline-block px-4 py-2 text-gray-700 hover:text-gray-900'>Add Blog</li>
        </ul>
      </nav>
    </>
  )
}

export default navbar
