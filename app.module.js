angular
.module('oomApp', ['ngRoute', 'timer'])
.config (function ($routeProvider) {
  $routeProvider
  .when ('/', {
        templateUrl: 'templates/main.html',
        controller: 'HomeController'
      })
});
