angular.module('authService', [])

	/**
		- auth factory to login and get information
		- inject $http for communicating with the API
		- inject $q to return promise objects
		- inject AuthToken to manage tokens
	**/
	.factory('Auth', ['$http', '$q', 'AuthToken', function($http, $q, AuthToken) {

		// create auth factory oject
		var authFactory = {};

		// handle login

		// handle logut

		// check if a user is logged in

		// get the user info

		// return auth factory obejct
		return authFactory;
	}])


	/**
		- factory for handling tokens
		- inject $window to store token client-sdie
	**/
	.factory('AuthToken', ['$window', function($window) {

		// create authTokenFactory object
		var authTokenFactory = {};

		// get the token

		// set the token or clear the token

		// return object
		return authTokenFactory;
	}])



	/**
		- application configuration to integrate token into requests
	**/
	.factory('AuthInterceptor', ['$q', 'AuthToken', function($q, AuthToken) {

		// create object
		var interceptorFactory = {};

		// attach the token to every request

		// redirect if a token doesn't authenticate

		// return the object
		return interceptorFactory;
	}]);
