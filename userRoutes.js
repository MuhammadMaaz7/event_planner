const express = require('express');
const router = express.Router();
const User = require('./userModel');

router.post('/', async (req, res) => {
    const { name, email, password } = req.body;

    const newUser = await User({
        name,
        email,
        password
    }).save();

    if (newUser) {
        res.status(201).json(newUser);
    } else {
        res.status(404).json({ message: "Invalid User" });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (user) {
        res.status(200).json({ message: "Login successful", user });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

module.exports = router;