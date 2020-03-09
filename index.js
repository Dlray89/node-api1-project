//import express after download
const express = require('express');

//set server to express as a function
const server = express();

//use the server on express
server.use(express.json())


//set port up
const port = 5000;

//listen to server to make sure its working
server.listen(port, () => 
console.log(`n\ ** This is server http://localhost:${port} ** \n`))