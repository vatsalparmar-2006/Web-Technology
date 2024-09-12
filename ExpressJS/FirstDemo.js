const express = require('express');

const app = express();

const students = ['rohit','gill','virat','shreyash','rahul'];

// getAll
app.get('/students', (req,res)=>{
    res.send(students);
});

// getById
app.get('/students/:index', (req,res)=>{
    res.send(students[req.params.index]);
});

// insert or create
app.post('/students/:name', (req,res)=>{
    students.push(req.params.name);
    res.send(students);
});

// modify or change
app.patch('/students/:index/:newname', (req,res)=>{
    const {index,newname} = req.params;
    students[index] = newname;
    res.send(students);
});

// delete or remove
app.delete('/students/:index', (req,res)=>{
    students.splice(req.params.index,1);
    res.send(students);
});

app.listen(3000,()=>{
    console.log("Server started @ 3000.")
});
