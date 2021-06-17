const express = require ("express");
const mongoose = require ("mongoose");


// Require connectDB
const connectDB = require('./config/connectDB');


const items = require('./routes/api/items')

const app = express () ;

//Middelware
app.use(express.json())


//DB config 

connectDB(); 

// Connect to MOngo

/*mongoose.connect(db, {useUnifiedTopology:true , useNewUrlParser:true , useCreateIndex: true })
.then(()=>console.log('mongodb is conencted...'))
.catch(err=> console.log(err))*/


//use routes
app.use('/api/items',items) 

//port 
const port = 5000;
app.listen(port, err => {
  err? console.log(err) : console.log(`🚀 The Server is running on port ${port}`);
});

