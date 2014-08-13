'use strict';

angular.module('christineoen').controller('MainCtrl', function($scope, $firebase) {
  var ref = new Firebase('https://chrisoen.firebaseio.com/data');
  var sync = $firebase(ref);
  // create a synchronized array for use in our HTML code
  $scope.messages = sync.$asArray();

  $scope.addMessage = function(text) {
    $scope.messages.$add({text: text});
  };
});
