"use strict";

app.controller("BoardListCtrl", function($scope, $rootScope, BoardFactory, PinFactory) {
$scope.boards = [];
$scope.pins = []
$scope.pindisplay = false;

$scope.createNewBoard = function(boardToAdd) {
  boardToAdd.uid = $rootScope.user.uid;
  BoardFactory.addBoard(boardToAdd).then(function() {
    console.log("successfully added");
  });
};

let getBoards = function() {
  BoardFactory.getUserBoards($rootScope.user.uid).then(function(returnedBoards){
    $scope.boards = returnedBoards;
  })
}

getBoards();

 $scope.selectBoard = function(boardId) {
  PinFactory.getPinList(boardId).then(function(returnedPins){
    $scope.pins = returnedPins;
    console.log($scope.pins);
    $scope.pindisplay = !$scope.pindisplay;
    })
 };


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