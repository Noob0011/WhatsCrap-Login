const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory user database (replace with a real database in production)
const users = [
    { username: 'admin', password: 'adminpassword' },
    // Add more users as needed
];

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simulate user authentication (replace with actual authentication logic)
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
