var App = angular.module("App", ['ui.router', 'oc.lazyLoad']);
App.controller("PageTitle", pageTitle);
function pageTitle($scope) {
    $scope.title = "Welcome Page";
};


App.controller('loadjs', function ($ocLazyLoad,$scope) {
    $ocLazyLoad.load('Component/login/loginController.js');
})
