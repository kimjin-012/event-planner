const mongoose = require('mongoose');

const MainSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must have a name..."]
    },
    address: {
        type: String,
        required: [true, "where is it taken place?..."]
    },
    description: {
        type: String,
        required: [true, "What is this about?..."]
    }
}, {timestamps:true})

const Main = mongoose.model('mainschema', MainSchema);

module.exports = Main;