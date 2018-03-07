var mongoose = require('mongoose')
var User = mongoose.model('User')

exports.getUsers = function(req,res){
	//use the User model to find all users
	User.find(function(error, users) {
		//handle potential error
		if (error) return res.json({message: 'cant find users'})
		
		//respond with users
			res.json(users)
		
	}) 
}

exports.createUser = function(req, res) {
	//create  a new instance of your use
	var user = new User({
		email: 'SR@gmail.com',
		password: 'mypassword',
		username: "seanruhland24"
	})

	//save your user
	//configure a callback
	user.save(function(error, savedUser){
		//if there's an error
		//return out of the function
		//response with some json error message
		if(error) {
			return res.json({message: 'error db'})
		}
		//respond with user that was saved
		res.json({savedUser})
	})
}

exports.updateUser = function(req, res) {
	 User.findOne({ _id: req.params.id}, function(error, user){
	 	user.email = 'test'
	 	user.password = 'new pw'
	 	user.save(function(error, user){
	 		if (error) {
	 			res.json({message: 'error updating'})
	 		} res.json({message: 'user updated!'})
	 	})

	
	})
}

exports.deleteUser = function(req, res) {
	User.findOneAndRemove({_id: req.params.id}, req.body, function(err,data)
	{
	    if(!err){
	        console.log("Deleted");
	    } 
	});
	res.json({
		message: 'deleted user ' + req.params.id
	})
}