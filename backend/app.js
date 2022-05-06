const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const database = require('./database');

//Connect mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Database connected')
},
error => {
  console.log('Error connecting: ', error)
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}))
app.use(cors());

//API
const routes = require('../backend/routes/post.route');
app.use('/api', routes);

//create port 
const port = process.env.PORT || 4000; //
const server = app.listen(port, () => {
  console.log('Connected to port ', port)
})

//error handler
app.use(function(err, req, res, next) {
  console.error(err.message);
  if(!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message)
})