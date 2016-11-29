"use strict";

let isAuth = (AuthFactory) => new Promise((resolve, reject)=>{
 if (AuthFactory.isAuthenticated()){
   resolve();
 } else {
   reject();
 }
});

app.run(function(FIREBASE_CONFIG, $rootScope, $location, AuthFactory){
  firebase.initializeApp(FIREBASE_CONFIG);
  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
    let logged = AuthFactory.isAuthenticated();
    let appTo;

    if (currRoute.originalPath){
     appTo = currRoute.originalPath.indexOf("/auth") !== -1;
   }

    if (!appTo && !logged) {
      event.preventDefault();
      $location.path("/auth");
    }

  });
});

app.config(function($routeProvider) {
	$routeProvider
		.when('/auth', {
			templateUrl: 'partials/auth.html',
			controller: 'AuthCtrl'
		})
		.when('/pins/list', {
			templateUrl: 'partials/pin-list.html',
			controller: 'PinListCtrl',
			// resolve: {isAuth}
		})
		.when('/pins/new', {
			templateUrl: 'partials/pin-new.html',
			controller: 'PinNewCtrl'
		})
		.when('/myboards/view', {
			templateUrl: 'partials/boards-list.html',
			controller: 'BoardListCtrl',
			// resolve: {isAuth}
		})
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