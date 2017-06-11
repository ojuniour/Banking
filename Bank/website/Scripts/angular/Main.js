var App = angular.module("App", ['ui.router']);
App.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    var loginPage = {
        name: 'login',
        url: '/HTML',
        templateUrl: 'HTML/login.html'
    };

    var dashboardPage = {
        name: 'dashboard',
        url: 'Dashboard/index.html',
        templateUrl: '<h3>Its the UI-Router hello world app!</h3>'
    };

    $stateProvider.state(loginPage);
    $stateProvider.state(dashboardPage);
});

App.controller("Login", login);

function login($scope) {
    $scope.username = {
        value: null,
        regex: '[a-zA-Z0-9_.-]{3,20}',
        validMsg: 'Correct'
    };

    $scope.password = {
        value: null,
        regex: '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,20}',
        validMsg: 'Correct'
    };  

    $scope.submit = function (form) {
        console.log($scope.username);
        console.log($scope.password);
        console.log(form);
    }

}