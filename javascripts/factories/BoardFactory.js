"use strict";

app.factory("BoardFactory", function($q, $http, FIREBASE_CONFIG) {

  var getUserBoards = function(userId) {
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/boards.json?orderBy="uid"&equalTo="${userId}"`)
      .success(function(response) {
        let boards = [];
        Object.keys(response).forEach(function(key) {
          response[key].id = key;
          boards.push(response[key]);
        });
        resolve(boards);
      })
      .error(function(errorResponse) {
        reject(errorResponse);
      });
    });
  };

  var getPinList = function(boardId) {
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/pins.json?orderBy="boardid"&equalTo="${boardId}"`)
      .success(function(response) {
        let pins = [];
        Object.keys(response).forEach(function(key) {
          response[key].id = key;
          pins.push(response[key]);
        });
        resolve(pins);
      })
      .error(function(errorResponse) {
        reject(errorResponse);
      });
    });
  };

  var addBoard = function(newBoard){
    return $q((resolve, reject)=> {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/boards.json`, JSON.stringify({
         title: newBoard.title,
         uid: newBoard.uid
        })
      ).success(function(postResponse) {
        resolve(postResponse);
        console.log("added");
      }).error(function(postError) {
        reject(postError);
      });
    });
  };

  return {
    getUserBoards: getUserBoards, addBoard: addBoard, getPinList: getPinList
  };
});