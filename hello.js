const express = require('express')
const app=express()

app.use(express.static('public'));

app.get('/',(req,res)=>res.sendFile(__dirname + '/public/views/hello1.html'));
app.get('/index',function(req,res){
    res.sendFile(__dirname + '/public/views/index.html')
});
app.get('/js',function(req,res){
    res.json({name:'sravya'})
});
app.get('/sravya',(req,res) => res.sendFile(__dirname + '/public/views/sravya.html'));

app.get('/button',(req,res) => res.sendFile(__dirname + '/public/views/button.html'));

app.listen(3000, () => console.log(`Example app listening on port ${3000}!`))