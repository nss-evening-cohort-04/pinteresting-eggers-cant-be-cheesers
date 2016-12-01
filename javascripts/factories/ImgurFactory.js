"use strict";

app.factory("ImgurFactory", function($q, $http, FIREBASE_CONFIG) {

let apiKeys = {};

var imageList = (searchText) => {
  return new Promise ((resolve, reject) => {
    $.ajax({
      method: 'GET',
      url: 'imgurAPIKeys.json'
    }).then((response) => {
      // console.log("response", response);
      apiKeys = response;
      let authHeader = 'Client-ID ' + apiKeys.client_id;

  $.ajax({
    method: 'GET',
    headers : {
      'Authorization': authHeader
    },
    url: `https://api.imgur.com/3/gallery/t/${searchText}`
  }).then((response) =>{
    // console.log("imgur response", response);
    resolve(response.data.items);
  }, (errorResponse) => {
    // console.log("imgur fail", errorResponse);
    reject(errorResponse);
  });
    }, (errorResponse) => {
      console.log("errorResponse", errorResponse);
    });

  });
};

  return {
    imageList: imageList
  };
});