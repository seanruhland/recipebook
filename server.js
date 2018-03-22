var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//connect to database
mongoose.connect('mongodb://localhost:27017/recipebook')
 
mongoose.connection.on('open', function() {console.log('db connected')})

//models 
require('./models/User')
require('./models/Recipe')


var userController = require('./controllers/userController')
var recipeController = require('./controllers/recipeController')
	
//read	
app.get('/user', userController.getUsers)
//create
app.post('/create-user', userController.createUser)
 //update
app.patch('/update-user/:id', userController.updateUser)
//delete
app.delete('/delete-user/:id', userController.deleteUser)

//read
app.get('/recipe', recipeController.getRecipes)
//create
app.post('/create-recipe', recipeController.createRecipe)
//update
app.patch('/update-recipe/:id', recipeController.updateRecipe)
//delete
app.delete('/delete-user/:id', recipeController.deleteRecipe)



app.listen(8080)
console.log('server is running')