const express = require('express');
const { required } = require('nodemon/lib/config');
const app = express();
const cors = require('cors');
app.use(cors());

const Port = process.env.Port || 5000;

const courses = require("./Data/Data.json")

app.get('/courses', (req, res)=>{
    res.send(courses);
})

app.get('/courses/:id', (req, res)=>{
    {
        const id = req.params.id;
        const getSingleCourse = courses?.find((c)=>c.id == id);
        res.send(getSingleCourse);
    }
});

app.get('/', (req, res)=>{
    res.send("server is running on")
});

app.listen(Port, ()=>{
    console.log("servar is running", Port)
});