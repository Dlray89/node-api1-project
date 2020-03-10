//import express after download
const express = require('express');
//import shortid here
const shortid = require('shortid')

//set server to express as a function
const server = express();

//use the server on express
server.use(express.json())

//set port up
const port = 5000;


let users = [
    {
        id: 1,
        name:"David",
        bio:"Web Dev"
    }
]

server.post('/api/users', (req,res) => {
const userInfo = req.body
if(!req.body.name|| !req.body.bio) {
    res.status(400).json({errorMessage: "Must enter a name and bio for user"})
}
users.push(userInfo)
userInfo.id = shortid.generate()
res.status(200).json(userInfo)

})

server.get('api/users', (req,res) => {
 
    if(!req.body.name || !req.body.bio ) {
        res.status(500).json({ErrorMessage: "The users information could not be retrived"})
    }
    
})


// const userInfo = req.body
// user.push(userInfo)
// userInfo.id = shortid.generate()
// res.status(200).json(userInfo)
//get users
//listen to server to make sure its working
server.listen(port, () => 
console.log(`n\ ** This is server http://localhost:${port} ** \n`))