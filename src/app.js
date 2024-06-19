const express=require('express');
const path = require('path'); 
const app=express();

//environment variable (it is used at time of deployment)
const port=process.env.PORT || 3000

// path of folder
const static_path=path.join(__dirname,'../public');
app.set('view engine', 'hbs');
app.use(express.static(static_path));



// routing the pages
//1.home page
app.get('',(req,res)=>{
  res.render('index');
});

// About page
app.get('/about',(req,res)=>{
  res.render('about');
});

// weather page
app.get('/weather',(req,res)=>{
  res.render('weather');
});

// page Not found
app.get('*',(req,res)=>{
  res.render('error page');
});

// listen the server
app.listen(port,()=>{
  console.log(`server is listening ${port}`);
})