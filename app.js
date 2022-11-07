//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const port = 3000 || process.env.PORT;

const app = express();

console.log(process.env.API_KEY);

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(session({
	secret: "secret",
	resave: false,
	saveUninitialized: false,

}));

app.use(passport.initialize());
app.use(passport.session())

mongoose.connect("mongodb+srv://mustofyou:Sifreney5@cluster0.krlyp.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true}); 

const userSchema = new mongoose.Schema( {
	email: String,
	password: String,
});

userSchema.plugin(passportLocalMongoose);


const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.route("/")

.get(function(req,res){
	res.render("home.ejs")
});

app.get("/secrets", function(req,res){
	if(req.isAuthenticated()){
		res.render("secrets")
	}
})

app.route("/register")

.get(function(req,res){
	res.render("register.ejs")
})

.post(function(req,res){
	User.register({username: req.body.username}, req.body.password, function(err, user){
		if(err){
			console.log(err);
			res.redirect("/register");
		} else {
			passport.authenticate("local")(req, res, function(){
				res.redirect("/secrets")
			});
		}
	});
});

app.route("/login")

.get(function(req,res){
	res.render("login.ejs")
})

.post(function(req,res){
	const user = new User({
		username: req.body.username,
		password: req.body.password
	});
	req.login(user, function(err){
		if (err) {
			console.log(err);
		} else{
			console.log("signing in");
			passport.authenticate("local");
			res.redirect("/secrets");

		};
	});
});

app.get("/logout", function(req,res){
	req.logout(function(err){
		res.redirect("/");
	});

});


app.listen(port, function(){
	console.log("Successfully started the server")
});















