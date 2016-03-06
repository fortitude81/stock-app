var app = angular.module('stockApp', ['ui.router', 'ngStorage']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './templates/home.html'})
    .state('add', {
      url: '/add',
      templateUrl: './templates/add.html',
      controller: 'addCtrl'})
    .state('list', {
      url: '/list',
      templateUrl: './templates/list.html',
      params: {
        quote: null
      },
      controller: 'listCtrl'})
    $urlRouterProvider.otherwise('/');
});

