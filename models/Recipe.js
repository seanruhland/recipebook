//bring in mongoose package
var mongoose = require('mongoose')
// extract Schema constructor function from mongoose package
var Schema = mongoose.Schema

//use Schema constructor to construct our own model, Recipe
//define the properties of Recipe model
//define the datatypes it'll accept
var recipeSchema = new Schema({
	name: String,
	cuisine: String,
	ingredients: Array,
	instructions:String,
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	created: {
		type: Date,
		default: Date.now(),
	},
})

//export the model, which we can reference as Recipe
module.exports = mongoose.model('Recipe', recipeSchema)

