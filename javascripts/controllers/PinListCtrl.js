"use strict";

app.controller("PinListCtrl", function($scope, $rootScope, PinFactory) {
$scope.pins = [];

let getPins = function() {
  PinFactory.getPinList().then(function(pins){
   $scope.pins = pins;
  });
};
// $rootScope.user.uid
getPins();

// ImgurFactory.imageList($scope.searchText);

//  $scope.deleteItem = function(itemIdToDelete) {
//   ItemFactory.deleteItem(itemIdToDelete).then(function(){
//     getpins();
//   });
//  };

//  $scope.inputChange = function(pinstatusChange) {
//     console.log(pinstatusChange);
//   ItemFactory.editItem(pinstatusChange).then(function(){
//     getpins();
//   });
//  };

});