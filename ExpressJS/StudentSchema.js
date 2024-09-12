const mongoose = require('mongoose');

const schema = mongoose.Schema({
    Enrollid: Number,
    Name: String,
    Sem: Number
});

module.exports = mongoose.model('Student', schema, "Students");