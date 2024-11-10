const router = require('express').Router();
const userModel = require('../model/User.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { authentication } = require('./user.auth');


// Routes
//singUp

router.post('/signup', async (req, res) => {
    try {

        const { username, email, password } = req.body;
        //username validation
        if (username.length < 4 || username.length > 50) {
            return res.status(400).json({ error: 'Username must be between 4 and 50 characters' });
        }

        const userExists = await userModel.findOne({ username: username });
        if (userExists) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        //email validation


        const emailExists = await userModel.findOne({ email: email });
        if (emailExists) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        //password validation
        const passExists = await userModel.findOne({ password: password });
        if (password.length < 5 || password.length > 50) {
            return res.status(400).json({ error: 'Password must be between 5 and 50 characters' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);


        //user creation
        const newUser = new userModel({
            username: username,
            email: email,
            password: hashedPassword
        });
        await newUser.save();

        return res.status(201).json({ message: 'User created successfully' });

    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Internal Server Error'
        })
    }
});


//login

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userModel.findOne({ username: username });
        if (!user) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid username or password' });
        }

        const message = 'Logged in successfully';

        //generate token
        const authclaims = { username: user.username, userId: user._id };

        // Generate JWT token with a secret key, expiry time, and return it to the client.
        // Replace PSG123 with your own secret key.
        const token = jwt.sign({authclaims}, "PSG123", { expiresIn: '2d' });
        return res.json({ token, message, username: user.username, userId: user._id, role: user.role });

    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Internal Server Error'
        })
    }

});

//get
//register 

router.get('/register', authentication, async (req, res) =>{
     try {
        const {id} = req.headers;
        const data = await userModel.findById(id).select('-password');
        return res.status(200).json(data);
     } catch (error) {
        res.status(500).json({error: error.message, message: 'Internal Server Error' });
     }
});


module.exports = router;