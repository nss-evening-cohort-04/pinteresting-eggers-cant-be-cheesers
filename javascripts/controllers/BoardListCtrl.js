"use strict";

app.controller("BoardListCtrl", function($scope, $rootScope, BoardFactory) {
$scope.items = [];

$scope.createNewBoard = function(boardToAdd) {
  boardToAdd.uid = $rootScope.user.uid;
  BoardFactory.addBoard(boardToAdd).then(function() {
    console.log("successfully added");
  });
};


// getItems();

//  $scope.deleteItem = function(itemIdToDelete) {
//   ItemFactory.deleteItem(itemIdToDelete).then(function(){
//     getItems();
//   });
//  };

//  $scope.inputChange = function(itemStatusChange) {
//     console.log(itemStatusChange);
//   ItemFactory.editItem(itemStatusChange).then(function(){
//     getItems();
//   });
//  };

});