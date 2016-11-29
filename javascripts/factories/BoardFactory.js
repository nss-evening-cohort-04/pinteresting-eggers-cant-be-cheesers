"use strict";

app.factory("BoardFactory", function($q, $http, FIREBASE_CONFIG) {

  var getPinList = function(userId) {
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/items.json?orderBy="uid"&equalTo="${userId}"`)
      .success(function(response) {
        let items = [];
        Object.keys(response).forEach(function(key) {
          response[key].id = key;
          items.push(response[key]);
        });
        resolve(items);
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
    getPinList: getPinList, addBoard: addBoard
  };
});