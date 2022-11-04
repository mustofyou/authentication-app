//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

var salt = bcrypt.genSaltSync(10);


const port = 3000 || process.env.PORT;

const app = express();

console.log(process.env.API_KEY);

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
	extended: true
}));

mongoose.connect("mongodb+srv://mustofyou:Sifreney5@cluster0.krlyp.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true}); 

const userSchema = new mongoose.Schema( {
	email: String,
	password: String,
});




const User = new mongoose.model("User", userSchema);


app.route("/")

.get(function(req,res){
	res.render("home.ejs")
});

app.route("/register")

.get(function(req,res){
	res.render("register.ejs")
})

.post(function(req,res){
	const newItem = new User({
		email: req.body.username,
		password: bcrypt.hashSync(req.body.password, salt)
	});
	newItem.save(function(err){
		if(!err){
			res.render("secrets.ejs");
		}else{
			res.send(err)
		}
	});
});

app.route("/login")

.get(function(req,res){
	res.render("login.ejs")
})

.post(function(req,res){
	const username = req.body.username;
	const password = req.body.password; //every hash password for every string is the same, thus the hashed password at login 'will mathces' the hashed password at register

	User.findOne({email: username}, function(err, foundUsr){
		if(err){
			console.log(err);
		}else{
			if(foundUsr){
				if(bcrypt.compareSync(password, foundUsr.password)){
					res.render("secrets.ejs");
				};
			};
		};
	});
})




app.listen(port, function(){
	console.log("Successfully started the server")
});















