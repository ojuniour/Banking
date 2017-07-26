var App = angular.module("App", ['ui.router', 'oc.lazyLoad']);
/////////////////////////////////////////////////////////////////////
App.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = { headers: { 'Content-type': 'application/json;charset=utf-8' } };
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
}])
App.controller("PageTitle", pageTitle);
function pageTitle($scope) {
    $scope.title = "Welcome Page";
};




App.controller('PageTitle', function ($rootScope) {
    //RouteService.setRoute("king");
    //RouteService.setRoute("Slave", 'queen', 'jack', 'love');
    //console.log(RouteService.routeArray);
   // RouteService.setRoute("Boss", 'yay');
   // console.log(RouteService.routeArray);
    // console.log(RouteService.route.king);
    //console.log(RouteService);
    //console.log(RouteService.routeArr);
}); 