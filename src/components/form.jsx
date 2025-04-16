// BlogForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    title: '',
    genre: '',
    content: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = {
      ...formData,
      date: new Date().toISOString().split('T')[0] // Format date as YYYY-MM-DD
    };

    try {
      await axios.post('http://localhost:5000/blog', dataToSend);
      alert('Blog saved!');
      setFormData({ name: '', title: '', genre: '', content: '' });
    } catch (err) {
      alert('Error saving blog');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Write a Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
      <input
          name="id"
          placeholder="Your Unique ID"
          className="w-full p-2 border rounded"
          value={formData.id}
          onChange={handleChange}
        />
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
  );
};

export default BlogForm;
