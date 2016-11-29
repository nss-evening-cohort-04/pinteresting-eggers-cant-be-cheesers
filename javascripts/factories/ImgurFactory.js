"use strict";

app.factory("ImgurFactory", function($q, $http, $rootScope, FIREBASE_CONFIG) {

let apiKeys = {};

var imageList = function (response) {
    return $q((resolve, reject) => {
        $http.get(`https://api.imgur.com/3/gallery/hot/viral/0.json`) // ${searchText}
        .success(function(response){
        resolve(response);
        console.log(response.data[0].link);
    })
    .error(function(errorResponse) {
        reject(errorResponse);
    });
});
};

  // var getPinList = function(userId) {
  //   return $q((resolve, reject) => {
  //     $http.get(`${FIREBASE_CONFIG.databaseURL}/items.json?orderBy="uid"&equalTo="${userId}"`)
  //     .success(function(response) {
  //       let items = [];
  //       Object.keys(response).forEach(function(key) {
  //         response[key].id = key;
  //         items.push(response[key]);
  //       });
  //       resolve(items);
  //     })
  //     .error(function(errorResponse) {
  //       reject(errorResponse);
  //     });
  //   });
  // };


return {imageList:imageList};
});