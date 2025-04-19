// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const path = require('path');
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use(cors());
app.use(express.static(path.join(__dirname)));

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

app.post('/blog', (req, res) => {
  const newBlog = req.body;

  let data = [];
  if (fs.existsSync('blogs.json')) {
    const file = fs.readFileSync('blogs.json');
    data = JSON.parse(file);
  }

  data.push(newBlog);
  fs.writeFileSync('blogs.json', JSON.stringify(data, null, 2));
  res.send({ message: 'Blog saved' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
