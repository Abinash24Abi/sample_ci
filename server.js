const express = require('express');

const app = express();

app.get("/" , (req,res) => {
   res.send("Welcom to CD")
});


const server = app.listen(8080,() => {
    console.log("Server is Running Successfully")
});


module.exports = {app , server}