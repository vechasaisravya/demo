const express = require('express')
const app=express()
app.get('/sravya',(req,res)=>res.send('HELLO WORLD'))
app.listen(4000, () => console.log(`Example app listening on port ${4000}!`))