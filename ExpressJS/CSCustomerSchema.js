const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    customerid : Number,
    customername : String,
    orderitem : String,
    noofitem : Number,
    tableno : Number,
    catagory : String
});


const Customer = mongoose.model('Customer',CustomerSchema,"Customers");
module.exports = Customer;