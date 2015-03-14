// name our angular app
var app = angular.module('firstApp', ['routerRoutes', 'ngAnimate']);

	// this will be the controller for the ENTIRE site
	app.controller('mainController', ['$scope', function ($scope) {

		// bind this to vm (view-model)
		var vm = this;

		// define variables and objects  on this
		// this lets them be available to our views
		// define a basic variable
		vm.message = 'Hey there! Come and see how good I look!';

		// define a list of items
		vm.computers = [
			{ name: 'Macbook Pro', color: 'Silver', nerdness: 7},
			{ name: 'Yoga 2 Pro', color: 'Gray', nerdness: 6},
			{ name: 'Chromebook Pro', color: 'Black', nerdness: 5}
		];

		// information that comes from our users
		vm.computerData = {};

		vm.addComputer = function () {
			vm.computers.push({
				// add a computer to the list
				name: vm.computerData.name,
				color: vm.computerData.color,
				nerdness: vm.computerData.nerdness
			});

			// after our computer has been added clear the form
			vm.computerData = {};
		};
	}]);

	// home page controller
	app.controller('homeController', ['$scope', function ($scope) {

		var vm = this;

		vm.message = 'This is the home pgae';

	}]);

	// about page controller
	app.controller('aboutController', ['$scope', function ($scope) {

		var vm = this;

		vm.message = 'Look! I am an about page'
	}]);

	// contact page controller
	app.controller('contactController', ['$scope', function ($scope) {

		var vm = this;

		vm.message = 'Contact Us! JK. This is just a demo';
	}]);

