const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: Number,
    name: String,
    sub: String
});

module.exports = mongoose.model('Faculty', schema, "Faculties");