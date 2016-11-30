"use strict";

app.factory("PinFactory", function($q, $http, FIREBASE_CONFIG) {

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

  var postNewPin = function(newPin) {
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/pins.json`,
        JSON.stringify({
          boardid: newPin.boardid,
          title: newPin.title,
          url: newPin.url,
          uid: newPin.uid
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

  return {
    getPinList: getPinList,
    postNewPin: postNewPin
  };
});


// ?orderBy="uid"&equalTo="${userId}"