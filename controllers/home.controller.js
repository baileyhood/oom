angular
.module ('oomApp')
.controller ('HomeController', function ($scope){
  $scope.initialLoad = function (name) {
    console.log ("hello " + name);
  }
  $scope.initialLoad("blah");

  $scope.timerRunning = true;

  $scope.startTimer = function (){
      $scope.$broadcast('timer-start');
      $scope.timerRunning = true;
  };

  $scope.stopTimer = function (){
      $scope.$broadcast('timer-stop');
      $scope.timerRunning = false;
  };
  // $scope.addCDSeconds = function (data) {
  //   console.log ("adding seconds", data)
  // }

});
