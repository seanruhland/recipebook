var mongoose = require('mongoose')
var Recipe = mongoose.model('Recipe')

exports.getRecipes = function(req,res){
	Recipe
	//use the recipe id to find all recipes
	.findOne({ _id: req.params.id})
	.populate('author')
	.exec(function(error, recipe) {
		//handle potential error
		if(error) {return  res.json({message:'error executing user'})};
		console.log(recipe)
		//respond with recipes
		res.json(recipe)
	})
} 


exports.createRecipe = function(req, res) {
	//create  a new instance of your use
	var recipe = new Recipe({
		author: req.body.author,
		name: req.body.name,
	})
	//save your recipe
	//configure a callback
	recipe.save(function(err, recipe) {
		//if there's an error
		//return out of the function
		//response with some json error message
		if (err) {
			return res.json({message:'could not save recipe'})
		}
		//respond with recipe that was saved
		res.json(recipe)
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