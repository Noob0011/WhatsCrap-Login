const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory user database (replace with a real database in production)
let users = [
    { id: 1, username: 'admin', password: 'password', redirectUrl: 'https://example.com/admin-dashboard' },
    { id: 2, username: 'user1', password: 'pass1', redirectUrl: 'https://example.com/user1-dashboard' },
    // Add more users as needed
];

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simulate user authentication (replace with actual authentication logic)
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ message: 'Login successful', redirectUrl: user.redirectUrl });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Add new user endpoint (for future use)
app.post('/addUser', (req, res) => {
    const { username, password, redirectUrl } = req.body;
    const newUser = { id: users.length + 1, username, password, redirectUrl };
    users.push(newUser);
    res.json({ message: 'User added successfully', newUser });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
