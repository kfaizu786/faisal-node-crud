const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const user = require('./routes/api/user');
const profile = require('./routes/api/profile');  
const post = require('./routes/api/post');


const app = express();

//Body parser middleware
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());

//Db config

const db = require('./config/keys').mongoURI;

mongoose.connect(db)
.then(() => {console.log('Mongo db connected')})
.catch(err => console.log(err));

// Use Routes

//Crud operation /api/user

app.use('/api/user',user);
app.use('/api/profile',profile);
app.use('/api/post',post  );

const port = process.env.PORT || 5000;

app.get('/',(req,res) => {res.send('Hello')});

app.listen(port , () => { console.log( `Server Running On port ${ port}`)});


//For React I didint got Time testttt


