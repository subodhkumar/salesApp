var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
res.redirect('/views/home.html');
});
app.listen(4000,()=>{
    console.log('Server started at 4000');
})
