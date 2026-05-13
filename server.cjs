const express = require('express');
const path = require('path');
const app = express();

// 1. Serve static files (css, js, images)
app.use(express.static(path.join(__dirname, 'dist')));

// 2. Catch-all: for any other request, serve index.html (SPA routing)
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Frontend server is running on port ${PORT}`);
});
