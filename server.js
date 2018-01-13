const express = require('express');
const hbs = require('hbs');


var app = express();
hbs.registerPartials(__dirname+'/views');
app.set('View engine', 'hbs');

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
  res.render('header.hbs',{
    pageTitle:'Welcome to my website Page',
    currentYear: new Date().getFullYear()
  });
})
app.get('/home', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.render('home.hbs', {
    pageTitle:'Welcome to Home Page',
    welcomePage: 'Home page',
    currentYear: new Date().getFullYear()
  })
});

app.get('/about', (req, res) => {
  res.render('about.hbs',{
    pageTitle:'About Page',
    currentYear: new Date().getFullYear()

  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000,()=>{
  console.log("Server started on port 3000");
});
