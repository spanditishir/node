var numeral = require('numeral');
var bcrypt = require('bcrypt-nodejs');
var dateFormat = require('dateformat');

exports.loggedIn = function(req, res, next) {
	if (req.session.user) { // req.session.passport._id
		next();
	} else {
		res.redirect('/login');
	}
}

exports.home = function(req, res) {

	res.render('home.ejs', {
		title:'Welcome to Nodejs Express MVC',
		error : req.flash("error"),
		success : req.flash("success"),
		session : req.session,
	});
}

exports.signup = function(req, res) {
	if (req.session.user) {
		res.redirect('/home');
	} else {
		res.render('signup', {
			error : req.flash("error"),
			success : req.flash("success"),
			session : req.session
		});
	}
}

exports.login = function(req, res) {
	if (req.session.user) {
		res.redirect('/home');
	} else {
		res.render('login', {
			error : req.flash("error"),
			success : req.flash("success"),
			session : req.session
		});
	}
}

exports.logout = function(req, res) {
	req.session.destroy();
	res.redirect('/login');
}