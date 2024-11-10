const mongoose = require('mongoose');

try {
    
    function connection(){  mongoose.connect("mongodb+srv://dombeshivam80:Shiv1234@cluster0.8xfcp.mongodb.net/Miniproject", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}
    console.log('Connected to MongoDB');
    
} catch (error) {
    console.error('Failed to connect to MongoDB:', error);
}

module.exports = connection;