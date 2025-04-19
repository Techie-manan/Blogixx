# **Launching Soon** 🚀
# 📝 Blogixx - A Full-Stack Blogging Platform

Blogixx is a full-fledged blogging platform built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) and styled beautifully with **Tailwind CSS**. It allows users to create, publish, and read blogs with a clean and responsive interface.

## 🚀 Features

- 🖊️ Create and submit blog posts
- 📄 View all submitted blogs
- 🔍 View full content of a selected blog
- 📅 Blogs include author's name, genre, title, content, and submission date
- 🎨 Responsive UI with Tailwind CSS
- 🔃 Smooth state-based rendering for full blog view
- 🔧 Backend stores blogs in a JSON file or database
- 🌐 Cross-Origin Resource Sharing (CORS) enabled

## 🛠️ Tech Stack

| Tech        | Usage                      |
|-------------|-----------------------------|
| React       | Frontend framework          |
| Tailwind CSS| UI styling                  |
| Node.js     | Runtime for backend         |
| Express.js  | Backend framework           |
| MongoDB / JSON | Blog data storage        |
| Axios / Fetch | API communication         |

## 📂 Project Structure

```bash
Blogixx/
│
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/      # Navbar, BlogForm, BlogCards
│   │   ├── App.js           # Main logic
│   │   └── index.js
│   └── public/
│
├── server/                  # Node + Express backend
│   ├── server.js            # Handles routes and saving blogs
│   └── blogs.json           # Stores blogs (if not using DB)
│
└── README.md                # This file
