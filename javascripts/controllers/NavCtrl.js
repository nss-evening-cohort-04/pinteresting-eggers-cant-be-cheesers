"use strict";

app.controller("NavCtrl", ($scope) => {
  $scope.navItems = [
  {
    name:"Logout",
    url: "#/logout"
  },
  {
    name:"Search Pins",
    url: "#/pins/list"
  },
  {
    name:"My Boards",
    url: "#/myboards/view"
  },
  {
    name:"Add New Pin",
    url: '#/pins/new'
  }
  ];
});