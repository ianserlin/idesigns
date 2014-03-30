Router.configure({
	notFoundTemplate: 'NotFound'
	, loadingTemplate: 'Loading'
	, templateNameConverter: 'upperCamelCase'
	, routeControllerNameConverter: 'upperCamelCase'
});

RouteController.prototype.layoutTemplate = 'MasterLayout';

//Any function that is related to routes, are going to be in Router namespace.

// Router.mustBeLoggedIn = function () {
// 	if(!Meteor.user()) {
// 		this.redirect("home");
// 	}
// };

// Router.mustNotBeLoggedIn = function () {
// 	if(Meteor.user()) {
// 		this.redirect("home");
// 	}
// };

// Router.mustBeAdmin = function() {
// 	if(!Users.isAdmin(Meteor.userId())){
// 		this.redirect("home");
// 	}
// };

// if (Meteor.isClient) {
// 	var publicRoutes = ['home'];
// 	Router.before(Router.mustBeLoggedIn, {except: publicRoutes});

// 	var loginAndRegistrationRoutes = [];
// 	Router.before(Router.mustNotBeLoggedIn, {only: loginAndRegistrationRoutes});

// 	var adminRoutes = [];
// 	Router.before(Router.ensureAccountIsAdmin, {only: adminRoutes});
// }

// We want here to be a table of content for routes.  All of the other stuff
// will be put into individual route files.
Router.map(function () {
	this.route('home', {path: '/'});
	this.route('about', {path: '/about'});
	this.route('contact', {path: '/contact'});
});
