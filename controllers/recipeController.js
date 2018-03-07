var mongoose = require('mongoose')
var Recipe = mongoose.model('Recipe')

exports.getRecipes = function(req,res){
	//use the recipe model to find all recipes
	Recipe.find(function(error, Recipes) {
		//handle potential error
		if (error) return res.json({message: 'cant find recipes'})
		
		//respond with recipes
			res.json(recipes)
		
	}) 
}

exports.createRecipe = function(req, res) {
	//create  a new instance of your use
	var recipe = new recipe({
		email: 'SR@gmail.com',
		password: 'mypassword',
		username: "seanruhland24"
	})

	//save your recipe
	//configure a callback
	recipe.save(function(error, savedRecipe){
		//if there's an error
		//return out of the function
		//response with some json error message
		if(error) {
			return res.json({message: 'error db'})
		}
		//respond with recipe that was saved
		res.json({savedRecipe})
	})
}

exports.updateRecipe = function(req, res) {
	 Recipe.findOne({ _id: req.params.id}, function(error, recipe){
	 	recipe.email = 'test'
	 	recipe.password = 'new pw'
	 	recipe.save(function(error, recipe){
	 		if (error) {
	 			res.json({message: 'error updating'})
	 		} res.json({message: 'recipe updated!'})
	 	})

	
	})
}

exports.deleteRecipe = function(req, res) {
	Recipe.findOneAndRemove({_id: req.params.id}, req.body, function(err,data)
	{
	    if(!err){
	        console.log("Deleted");
	    } 
	});
	res.json({
		message: 'deleted recipe ' + req.params.id
	})
}