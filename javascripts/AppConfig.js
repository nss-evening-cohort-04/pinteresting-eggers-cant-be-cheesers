"use strict";

app.config(function($routeProvider) {
	$routeProvider
		// .when('/auth', {
		// 	templateUrl: 'partials/auth.html',
		// 	controller: 'AuthCtrl'
		// })
		.when('/pins/list', {
			templateUrl: 'partials/pin-list.html',
			controller: 'PinListCtrl',
			// resolve: {isAuth}
		})
		// .when('/pins/new', {
		// 	templateUrl: 'partials/pin-new.html',
		// 	controller: 'PinNewCtrl',
		// 	resolve: {isAuth}
		// })
		// .when('/pins/view/:id', {
		// 	templateUrl: 'partials/pin-view.html',
		// 	controller: 'PinViewCtrl',
		// 	resolve: {isAuth}
		// })
		// .when('/pins/edit/:id', {
		// 	templateUrl: 'partials/pin-new.html',
		// 	controller: 'PinEditCtrl',
		// 	resolve: {isAuth}
		// })
		// .when('/logout', {
		// 	templateUrl: 'partials/auth.html',
		// 	controller: 'AuthCtrl',
		// 	resolve: {isAuth}
		// })
		.otherwise('/auth');
	});