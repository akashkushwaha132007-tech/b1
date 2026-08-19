const express = require("express");

const app = express();

app.use(express.json())

app.get('/',(req,res)  =>{
    res.send("welcome to everyone")
})


app.get('/login',(req,res)  =>{
    res.send("you are logged ")
})

app.listen(8800, ()  =>{
    console.log("server is running.")
})