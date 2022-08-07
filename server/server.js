const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser')

const mongoose = require('mongoose');
const User = require('./models/Users')
mongoose.connect("process.env.MONGODB_KEY");

app.use(express.urlencoded({ extended: true }));

app.use(express.json()); // fix the empty returned object probleme

app.get('/api', (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]}) 
})

app.post('/api/signup', (req, res) => {
    const {first_name, last_name, email, password} = req.body

    User.findOne({email: email}, (err, result) => {
        if (result !== null)
        {
            console.log("user Already exist");
        }
        else {
            const newUser = new User({
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password
            })
            console.log(req.body)
            newUser.save();
        }

    })

})

app.post('/api/login', (req, res) => {
    const {email, password} = req.body;
    User.findOne({email: email}, (err, foundResult) => {
        foundResult === null ?
        console.log("Email or password incorrect")
        : err ? console.log(err)
        : foundResult.password === password ? res.json({"login": true})
        : console.log("incorrect password");
    })
})




app.listen(PORT, (req, res) => {
    console.log("Succesful Running in port 5000")
})