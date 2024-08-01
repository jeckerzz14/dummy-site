// Libraries
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
require('./routes/index.js')(app);

// Serve static files from the 'web' directory
app.use('/public', express.static(path.join(__dirname, '../web/public')));

// Serve login form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../web', 'index.html'));
});

// Serve dashboard page
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../web/views', 'dashboard.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});