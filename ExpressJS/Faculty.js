const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Faculty = require('./FacultySchema');

mongoose.connect('mongodb+srv://myUSer:myUser@cluster0.zkpmd.mongodb.net/Faculty_Info').then(() => {

    console.log("Connected with database...");

    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));


    // getAll
    app.get('/faculties', async (req, res) => {
        const ans = await Faculty.find();
        res.send(ans);
    });

    // getById
    app.get('/faculties/:id', async (req, res) => {
        const ans = await Faculty.find({ id: req.params.id });
        res.send(ans);
    });

    // create or insert
    app.post('/faculties', async (req, res) => {
        Fac = new Faculty({ ...req.body });
        const ans = await Fac.save();
        res.send(ans);
    });

    // update or change
    app.patch('/faculties/:id', async (req, res) => {
        Fac = await Faculty.findOne({ id: req.params.id });
        Fac.name = req.body.name;
        Fac.sub = req.body.sub;
        await Fac.save();
        res.send(Fac);
    });

    // delete
    app.delete('/faculties/:id', async (req, res) => {
        const ans = await Faculty.deleteOne({ id: req.params.id });
        res.send(ans);
    });


    app.listen(3000, () => {
        console.log("Server Started @ 3000");
    });
});