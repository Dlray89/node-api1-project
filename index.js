//import express after download
const express = require('express');
//import shortid here
const shortid = require('shortid')

//set server to express as a function
const server = express();

//use the server on express
server.use(express.json())


//get users
server.get('/api/users', (req,res) => {
    res.status(200).json({users: "Have been retrieved"})
})


//post users/new


server.post('/api/users', (req,res) => {
const user = [
    {
        "id": 1,
        "name": "David",
        "bio": "Web Dev"
    }
]

const userInfo = req.body
user.push(userInfo)
userInfo.id = shortid.generate()
res.status(200).json(userInfo)
})



//set port up
const port = 5000;

//listen to server to make sure its working
server.listen(port, () => 
console.log(`n\ ** This is server http://localhost:${port} ** \n`))