const express = require('express');
const path = require('path');
const app = express();

// Serve everything in the public folder
app.use(express.static(path.join(__dirname, 'public')));

// When someone visits "/", send sara.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sara.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
