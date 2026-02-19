const express = require('express')
// const cors = require('cors')
app = express()


app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.post('/name',(req,res)=>{
    const name = req.body;
    res.status(200).json({name:name})
})
app.listen(5000);
console.log("Server running on port 5000 successfully....");