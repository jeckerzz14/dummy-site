const express = require('express');
const router = express.Router();

// Services
const userService = require('../services/user-service.js');

// Utils
const { hashPassword } = require('../utils/auth-util.js');

/**
 * Handle Login
 */
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const hashedPasswordInput = hashPassword(username.toLowerCase(), password);

    try {
        const results = await userService.fetchUserData(username);

        if (results.length > 0) {
            const user = results[0];

            // Compare the hashed password
            if (hashedPasswordInput !== user.password) {
                res.status(401).send('Login Failed');
            } else {
                res.status(200).send('Login Succeed');
            }

        } else {
            res.status(401).send('Login Failed');
        }
    } catch (err) {
        console.error('Error fetching user data:', err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
