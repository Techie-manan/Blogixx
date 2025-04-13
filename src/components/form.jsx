import React from 'react'

const form = () => {
  return (
    <>
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl">
    <h2 className="text-2xl font-bold mb-4 text-center">Write a Blog</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Your Name"
        className="w-full p-2 border rounded"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="title"
        placeholder="Blog Title"
        className="w-full p-2 border rounded"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        name="genre"
        placeholder="Blog Genre"
        className="w-full p-2 border rounded"
        value={formData.genre}
        onChange={handleChange}
      />
      <textarea
        name="content"
        placeholder="Your Blog Content"
        className="w-full p-2 border rounded h-40"
        value={formData.content}
        onChange={handleChange}
      />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Submit Blog
      </button>
    </form>
  </div>
  </>
  )
}

export default form
