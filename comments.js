// Create web server with express
const express = require('express');
const app = express();

// Define a route for comments
app.get('/comments', (req, res) => {
    res.send('Comments');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});