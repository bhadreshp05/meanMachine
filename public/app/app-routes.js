// inject ngRoute for all our routing needs
var routes = angular.module('routerRoutes', ['ngRoute']);

	// configure our routes
	routes.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$routeProvider
			// route for home page
			.when('/', {
				templateUrl : 'app/views/pages/home.html',
				controller: 'homeController',
				controllerAs: 'home'
			})

			// route for about page
			.when('/about', {
				templateUrl: 'app/views/pages/about.html',
				controller: 'aboutController',
				controllerAs: 'about'
			})

			// route for contact page
			.when('/contact', {
				templateUrl: 'app/views/pages/contact.html',
				controller: 'contactController',
				controllerAs: 'contact'
			});
		$locationProvider.html5Mode(true);
	}]);