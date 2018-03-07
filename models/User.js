//bring in mongoose package
var mongoose = require('mongoose')
// extract Schema constructor function from mongoose package
var Schema = mongoose.Schema

//use Schema constructor to construct our own model, User
//define the properties of User model
//define the datatypes it'll accept
var userSchema = new Schema({
	email: String,
	password: String
})

//export the model, which we can reference as User
module.exports = mongoose.model('User', userSchema)

