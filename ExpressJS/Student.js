const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Student = require('./StudentSchema');

mongoose.connect('mongodb+srv://myUSer:myUser@cluster0.zkpmd.mongodb.net/Student_Info').then(() => {

    console.log("Connected with database...");

    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));

    // getAll
    app.get('/students', async (req, res) => {
        const ans = await Student.find();
        res.send(ans);
    });

    // getElementByID
    app.get('/students/:Enrollid', async (req, res) => {
        const ans = await Student.findOne({ Enrollid: req.params.Enrollid });
        res.send(ans);
    });

    // create or insert
    app.post('/students', async (req, res) => {
        Stu = new Student({ ...req.body });
        const ans = await Stu.save();
        res.send(ans);
    });

    // update or change
    app.patch('/students/:Enrollid', async (req, res) => {
        Stu = await Student.findOne({ Enrollid: req.params.Enrollid });
        Stu = new Student({ ...req.body });
        ans = await Stu.save();
        res.send(ans);
    });

    // delete
    app.delete('/students/:Enrollid', async (req, res) => {
        const ans = await Student.deleteOne({ Enrollid: req.params.Enrollid });
        res.send(ans);
    });


    app.listen(3000, (req, res) => {
        console.log("Server Started @ 3000");
    });
});