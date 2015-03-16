// pe2c -> press enter to chat
var app = angular.module('pe2c', []);

app.controller('Ctrl', function($scope) {
  $scope.enterPressed = false;

  $scope.onKeyDown = function(ev) {
    if (ev.keyCode == 13) {
      $scope.enterPressed = !$scope.enterPressed;
    }
  };
});

app.directive('pe2c', function() {
  return {
    templateUrl: 'templates/_pe2c.html'
  }
});
