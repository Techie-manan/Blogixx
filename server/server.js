// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/blog', (req, res) => {
  const newBlog = req.body;

  let data = [];
  if (fs.existsSync('client/blog.json')) {
    const file = fs.readFileSync('client/blog.json');
    data = JSON.parse(file);
  }

  data.push(newBlog);
  fs.writeFileSync('client/blog.json', JSON.stringify(data, null, 2));
  res.send({ message: 'Blog saved' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
