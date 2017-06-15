var App = angular.module("App", ['ui.router', 'oc.lazyLoad']);
App.controller("PageTitle", pageTitle);
function pageTitle($scope) {
    $scope.title = "Welcome Page";
};


App.factory('routeFactory', function () {
    // var routeArray = {};
    return {
        routeArray:
        function (name, url) {
            return console.log(name + url);
        }
    };
    //routeArray.route = dashboardPage;
    //return routeArray;
});

App.controller('loadjs', function (routeFactory) {
    //routeFactory.routeArray("love", "love.com");
})