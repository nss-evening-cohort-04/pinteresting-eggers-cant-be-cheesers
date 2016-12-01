"use strict";

app.controller("PinListCtrl", function($scope, $rootScope, BoardFactory, PinFactory) {
$scope.boards = [];
$scope.pins = [];
$scope.selectedPin;

let getPins = function() {
  PinFactory.getPinDatabase().then(function(pins){
   $scope.pins = pins;
  });
};

getPins();


let getBoards = function() {
  BoardFactory.getUserBoards($rootScope.user.uid).then(function(returnedBoards){
    $scope.boards = returnedBoards;
  })
}

getBoards();

$scope.addPinToBoard = function(board) {
  PinFactory.postNewPinToBoard(board.id, $scope.selectedPin).then(function(pinAddedToBoard){
    console.log("pin added!");
  })
}

$scope.setPinId = function(selectedPin) {
  $scope.selectedPin = selectedPin;
}

});