const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Client = require('./BMClientSchema');

const router = express.Router();

const userName = process.env.DBUSER;
const userPass = process.env.DBPASSWORD;

mongoose.connect(`mongodb+srv://${userName}:${userPass}@cluster0.zkpmd.mongodb.net/Bank_Management`).then(() => {

    console.log("Connect with database.");

    router.use(bodyParser.urlencoded({ extended: false }));

    //getAll
    router.get('/clients', async (req, res) => {
        const clients = await Client.find();
        res.send(clients);
    });

    //getById
    router.get('/clients/:clientid', async (req, res) => {
        const client = await Client.findOne({ clientid: req.params.clientid });
        res.send(client);
    });

    //create or insert
    router.post('/clients', async (req, res) => {
        clients = new Client({ ...req.body });
        const ans = await clients.save();
        res.send(ans);
    });

    //update
    router.patch('/clients/:clientid', async (req, res) => {
        var client = await Client.findOne({ clientid: req.params.clientid });
        client = new Client({ ...req.body });
        const ans = await client.save();
        res.send(ans);
    });

    //delete
    router.delete('/clients/:clientid', async (req, res) => {
        const client = await Client.deleteOne({ clientid: req.params.clientid });
        res.send(client);
    });
});

module.exports = router;