// pe2c -> press enter to chat
var app = angular.module('pe2c', []);

app.controller('Ctrl', function($scope) {
  $scope.history = [
    {socket: '#5EAA63', msg: 'So wow socket!'},
    {socket: '#5EAA67', msg: 'So wow socket!'},
    {socket: '#5EAA67', msg: 'So wow socket!'},
    {socket: '#5EAA67', msg: 'So wow socket!'},
    {socket: '#5EAA67', msg: 'So wow socket!'},
    {socket: '#5EAA67', msg: 'So wow socket!'},
    {socket: '#5EAA67', msg: 'So wow socket of death!'},
    {socket: '#5EAA67', msg: 'So wow socket!'},
    {socket: '#5EAA67', msg: 'So wow socket!'},
    {socket: '#5EAA67', msg: 'So wow socket!'},
    {socket: '#5EAA67', msg: 'So wow socket!'},
    {socket: '#5EAA67', msg: 'So wow socket!'},
    {socket: '#5EAA67', msg: 'So wow socket!'},
    {socket: '#5EAA67', msg: 'So wow socket!'},
    {socket: '#5EAA67', msg: 'So wow socket!'}
  ];
  $scope.enterPressed = false;

  $scope.onKeyDown = function(ev) {
    if (ev.keyCode == 13 && !$scope.enterPressed) {
      $scope.enterPressed = true;
    } else if (ev.keyCode == 27 && $scope.enterPressed) {
      $scope.enterPressed = false;
    }
  };
});

app.directive('pe2c', function() {
  return {
    templateUrl: 'templates/pe2c.html'
  }
});
