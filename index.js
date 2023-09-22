const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send('Welcome to the book review application')
});

const port = 4210;

app.listen(port, () => console.log("server runing"));