const router = require('express').Router();
const StatementModel = require('../model/Statement.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { authentication } = require('./user.auth');
const userModel = require('../model/User.model');

router.post('/add-statement', authentication, async (req, res) => {
    try {
        const { id } = req.headers;
        const user = await userModel.findById(id);

        // Check if user has admin role
        if (user.role !== 'admin') {
            return res.status(403).json({ message: 'Forbidden. Only admin can add a statement' });
        }

        // Create new statement
        const statement = new StatementModel({
            title: req.body.title,
            content: req.body.content,
            date: req.body.date || Date.now(),
            category: req.body.category,
            languages: req.body.languages,
            videoLink: req.body.videoLink,
        });

        // Save the statement to the database
        const result = await statement.save();
        res.status(201).json({ message: 'Statement added successfully', statement: result });

    } catch (error) {
        res.status(500).json({ message: 'Error adding statement', error: error.message });
    }
});

//update statement
router.put('/update-statement/:id', authentication, async (req, res) => {
    try {

        const {id} = req.headers;
        console.log(req.headers);
    
          // Get the statement ID from URL parameters
        const updatedStatement = await StatementModel.findByIdAndUpdate(
            id,
            {
                title: req.body.title,
                content: req.body.content,
                date: req.body.date || Date.now(),
                category: req.body.category,
                languages: req.body.languages,
                videoLink: req.body.videoLink,
            },
            { new: true }  // Return the updated document
        );

        
        if (!updatedStatement) {
            return res.status(404).json({ message: 'Statement not found' });
        }

        res.status(200).json({ message: 'Statement updated successfully', statement: updatedStatement });

    } catch (error) {
        res.status(500).json({ message: 'Error updating statement', error: error.message });
    }
});

//detlete statement

router.delete('/delete-statement/:id', authentication, async (req, res) => {
    try {

        const {id} = req.headers;
        console.log(req.headers);
        
        console.log(id);
          // Get the statement ID from URL parameters
        const deletedStatement = await StatementModel.findByIdAndDelete(
            id,
            {
                title: req.body.title,
                content: req.body.content,
                date: req.body.date || Date.now(),
                category: req.body.category,
                languages: req.body.languages,
                videoLink: req.body.videoLink,
            },
            { new: true }  // Return the updated document
        );

        
        if (!deletedStatement) {
            return res.status(404).json({ message: 'Statement not found' });
        }

        res.status(200).json({ message: 'Statement deleted successfully', statement: deletedStatement });

    } catch (error) {
        res.status(500).json({ message: 'Error deleting statement', error: error.message });
    }
});

//get all statements

router.get('/All-statements', async (req, res) => {
    try {
        const statements = await StatementModel.find().sort({ date: -1 })
        res.status(200).json(statements);
    } catch (error) {
        res.status(500).json({ message: 'Error getting statements', error: error.message });
    }
});

//recently added statements

router.get('/recentlyAdded-statements', async (req, res) => {
    try {
        const statements = await StatementModel.find().sort({ date: -1 }).limit(5)
        res.status(200).json(statements);
    } catch (error) {
        res.status(500).json({ message: 'Error getting statements', error: error.message });
    }
});

//get specific statement by id

router.get('/get-statement/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        
        const statement = await StatementModel.findById(id);

        if (!statement) {
            return res.status(404).json({ message: 'Statement not found' });
        }

        res.status(200).json(statement);

    } catch (error) {
        res.status(500).json({ message: 'Error getting statement', error: error.message });
    }
});

module.exports = router;
