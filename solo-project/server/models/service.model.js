const mongoose = require('mongoose');

// the schema is the blueprint of how the data should look
const ServiceSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:[true, 'First name is required'],
        minLength:[2, 'Name must be 2 or more characters']
    },
    lastName: {
        type: String,
        required:[true, 'Last name is required'],
        minLength:[2, 'Last name must be 2 or more characters']
    },
    description: {
        type: String,
        required:[true, 'Description is required'],
        minLength:[10, 'Description must be 10 or more characters']
    }
    // add timestamps
}, {timestamps:true});

const Service = mongoose.model('Service', ServiceSchema);

module.exports = Service;