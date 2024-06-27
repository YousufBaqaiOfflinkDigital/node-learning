const { log } = require('console');
const express = require('express');
const app = express();


// routes
app.get('/', (req, res)=>{
    res.send("Hello Customer")
});

app.listen(5000, ()=>{
    console.log(`customer api is running on port 5000`);
});