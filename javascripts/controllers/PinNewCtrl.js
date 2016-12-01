"use strict";

app.controller("PinNewCtrl", function($scope, $rootScope, $location, PinFactory) {
	$scope.newPins = {};

	$scope.addPin = function(pinToAdd) {
		PinFactory.postNewPinDataBase(pinToAdd).then(function(pinId) {
			$location.url("/pins/list");
			});
	};
});