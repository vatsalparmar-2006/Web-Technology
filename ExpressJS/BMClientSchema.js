const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    clientid: Number,
    actName: Number,
    clientname: String,
    amount: Number
});

module.exports = mongoose.model('BMClientSchema', clientSchema, "Clients");