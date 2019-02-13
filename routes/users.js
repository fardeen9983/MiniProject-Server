const express = require('express')
const User = require("../models/user")
const router = express.Router()

const isEmail = (email) => {
    if (typeof email !== 'string') {
        return false;
    }
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return emailRegex.test(email);
};

router.get("/register", async (req, res) => {
    try {
        const { email, phone, password, name } = req.body;
            // if (!isEmail(email)) {
            //     throw new Error("Invalid email address")
            // }
        // if (typeof password !== String || typeof name !== String ) {
        //     throw new Error("Invalid details")
        // }
        const user = User({ email: email, name: name, password: password, phone: phone })
        const persistedUser = user.save()
        res.status(201).json({
            title: 'User Registration Successful',
            detail: 'Successfully registered new user',
        });
    } catch (e) {
        res.status(400).json({
            errors: {
                title: 'Registration Error',
                detail: 'Something went wrong during registration process.',
                errorMessage: e.message,
            }
        })
    }
})

module.exports = router
