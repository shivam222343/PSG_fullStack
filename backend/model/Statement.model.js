const mongoose = require('mongoose');

const statementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    content: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 500
    },
    date: {
        type: Date,
        default: Date.now
    },
    languages: {
        type: String,
        required: true,
    },
    videoLink: {
        type: String,
        enum: [ ]
    },
    SolApproach: {
        type: String,
    },
    category: {
        type: String,
        required: true,
        enum: ['Frontend', 'Blockchain', 'Fullstack', 'Android development', 'Backend', 'Aiml']
    }
});

const StatementModel = mongoose.model('Statement', statementSchema);

module.exports = StatementModel;  
