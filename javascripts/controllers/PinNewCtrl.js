"use strict";

app.controller("PinNewCtrl", function($scope, $rootScope, $location, PinFactory) {
	$scope.newPins = {};

	$scope.addPin = function(pinToAdd) {
		// $scope.newTask.uid = $rootScope.user.uid;
		PinFactory.postNewPin(pinToAdd).then(function(pinId) {
			$location.url("/pins/list");
			$scope.newPins = "";
			});
	};
});