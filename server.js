var express = require('express')
var app = express()
var mongoose = require('mongoose')

//connect to database
mongoose.connect('mongodb://localhost:27017/blog')
 
mongoose.connection.on('open', function() {console.log('db connected')})

//models 
require('./models/User')


var userController = require('./controllers/userController')
	
//read	
app.get('/user', userController.getUsers)
//creat
app.post('/create-user', userController.createUser)
 //update
app.patch('/update-user/:id', userController.updateUser)
//delete
app.delete('/delete-user/:id', userController.deleteUser)

app.listen(8080)
console.log('server is running')