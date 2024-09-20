const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Customer = require('./CSCustomerSchema');

const router = express.Router();

const userName = process.env.DBUSER;
const userPass = process.env.DBPASSWORD;

mongoose.connect(`mongodb+srv://${userName}:${userPass}@cluster0.zkpmd.mongodb.net/Coffee_Shop`).then(() => {
    
console.log("Connect with Database.");

// const router = express();
router.use(bodyParser.urlencoded());

//getAll
router.get('/customers', async (req, res) => {
    const customers = await Customer.find();
    res.send(customers);
});

//getById
router.get('/customers/:customerid', async (req, res) => {
    const customer = await Customer.findOne({ customerid: req.params.customerid });
    res.send(customer);
});

//create or insert
router.post('/customers', async (req, res) => {
    customer = new Customer({ ...req.body });
    const ans = await customer.save();
    res.send(ans);
});

//update
router.patch('/customers/:customerid', async (req, res) => {
    const customer = await Customer.findOne({ customerid: req.params.customerid });
    customer = new Customer({...req.body})
    const ans = await customer.save();
    res.send(ans);
});

//delete
router.delete('/customers/:customerid', async (req, res) => {
    const customer = await Customer.deleteOne({ customerid: req.params.customerid });
    res.send(customer);
});
});

module.exports = router;