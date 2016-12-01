"use strict";

app.factory("PinFactory", function($q, $http, FIREBASE_CONFIG) {

  var getPinDatabase = function() {
   return $q((resolve, reject) => {
     $http.get(`${FIREBASE_CONFIG.databaseURL}/pins.json`)
     .success(function(response) {
       let allPins = [];
       Object.keys(response).forEach(function(key) {
         response[key].id = key;
         allPins.push(response[key]);
       });
       resolve(allPins);
     })
     .error(function(errorResponse2) {
       reject(errorResponse2);
     });
   });
 };

   var postNewPinDataBase = function(pin) {
   return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/globalpins.json`,
        JSON.stringify({
          title: pin.title,
          url: pin.url
        })
      )
     .success(function(response) {
       resolve(response);
     })
     .error(function(errorResponse) {
       reject(errorResponse);
     });
   });
 };

  var postNewPinToBoard = function(boardId, pin) {
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/pins.json`,
        JSON.stringify({
          boardid: boardId,
          title: pin.title,
          url: pin.url
        })
      )
      .success(function(postResponse) {
        resolve(postResponse);
      })
      .error(function(postError) {
        reject(postError);
      });
    });
  };

  var deletePin = function(pinToDelete) {
    return $q((resolve, reject) => {
      $http.delete(`${FIREBASE_CONFIG.databaseURL}/pins/${pinToDelete}.json`
      )
      .success(function(deleteResponse) {
        resolve(deleteResponse);
      })
      .error(function(deleteError) {
        reject(deleteError);
      });
    });
  };

  return {
    getPinDatabase: getPinDatabase,
    postNewPinDataBase: postNewPinDataBase,
    postNewPinToBoard: postNewPinToBoard,
    deletePin: deletePin
  };
});


// ?orderBy="uid"&equalTo="${userId}"