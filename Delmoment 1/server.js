var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const mongoURI = 'mongodb+srv://adrian:cjtai5@cluster0.wjxy1.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

var Users = require('./routes/Users')
var Errands = require('./routes/Errands');
// var userRouter = require('./routes/create_users');

app.use('/users', Users)
app.use('/errands', Errands);
// app.use('/create_users', userRouter);

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
