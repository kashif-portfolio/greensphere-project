// update_profile.js

document.getElementById("updateProfileForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    // Simulating updating the admin profile (in real-life, you'd update it on the server)
    alert(`Profile updated! New Username: ${newUsername}, New Password: ${newPassword}`);
    
    // Optionally redirect or reset the form
    // window.location.href = "admin_dashboard.html";  // Uncomment if you want to redirect
});
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // for password hashing
const User = require('./models/User'); // Assume you have a User model
const app = express();

// Middleware to parse form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to update admin profile
app.put('/admin/update-profile', async (req, res) => {
    const { username, oldPassword, newPassword } = req.body;

    try {
        // Find the admin user by username
        const admin = await User.findOne({ username: username });

        // Check if the admin exists and the old password matches
        if (!admin || !(await bcrypt.compare(oldPassword, admin.password))) {
            return res.status(401).send('Invalid credentials');
        }

        // Update username and password
        admin.username = username;  // You can also update username if needed
        if (newPassword) {
            // Hash the new password
            admin.password = await bcrypt.hash(newPassword, 10);
        }

        // Save the updated admin profile
        await admin.save();

        res.status(200).send('Profile updated successfully');
    } catch (err) {
        res.status(500).send('Error updating profile');
    }
});

