"use strict";

app.controller("BoardListCtrl", function($scope, $rootScope, BoardFactory, PinFactory) {
$scope.boards = [];
$scope.pins = []

$scope.createNewBoard = function(boardToAdd) {
  boardToAdd.uid = $rootScope.user.uid;
  BoardFactory.addBoard(boardToAdd).then(function() {
  getBoards();
  });
};

let getBoards = function() {
  BoardFactory.getUserBoards($rootScope.user.uid).then(function(returnedBoards){
    $scope.boards = returnedBoards;
  })
}

getBoards();

 $scope.selectBoard = function(boardId) {
  BoardFactory.getPinList(boardId).then(function(returnedPins){
    $scope.pins = returnedPins;
    })
 };

$scope.deletePinFromBoard = function(pinId, boardId) {
  PinFactory.deletePin(pinId).then(function(deleteSuccess){
    console.log("successfully deleted!");
    BoardFactory.getPinList(boardId).then(function(returnedPins){
    $scope.pins = returnedPins;
    })
  })
}

//  $scope.selectBoard = function(boardId) {
//  var ref = firebase.database().ref();
// var pinRef = ref.child("pins");
// pinRef.orderBy('boardid').startAt(boardId).endAt(boardid)
//   .on('value', function(snapshot) {
//       var pins = snapshot.val();
//       console.log(pins);
//   });
//  };





});