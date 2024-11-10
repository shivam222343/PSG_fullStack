const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin'],
    },
    avatar: {
        type:String,
        default: 'https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png'
    },
    shortList : [
        {
            type : mongoose.Types.ObjectId,
            ref: 'Statement'
         }
    ]
    
},
{
    timestamps: true
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;