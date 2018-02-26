var express = require('express');
var app = express();


app.get('/',(req,res)=>{
res.sendFile(__dirname+ '/public/home.html');
});
app.listen(4000,()=>{
    console.log('Server started at 4000');
})
