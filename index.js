var express = require('express');
var path = require('path');
var app = express();

const PORT = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
  res.redirect('/views/home.html');
});
app.listen(PORT,()=>{
    console.log('Server started at 5000');
})
