var App = angular.module("App", ['ui.router', 'oc.lazyLoad']);
/////////////////////////////////////////////////////////////////////

App.controller("PageTitle", pageTitle);
function pageTitle($scope) {
    $scope.title = "Welcome Page";
};




App.controller('loadjs', function ($scope) {
    $scope.pageTitle = "jk";
    //RouteService.setRoute("king");
    //RouteService.setRoute("Slave", 'queen', 'jack', 'love');
    //console.log(RouteService.routeArray);
   // RouteService.setRoute("Boss", 'yay');
   // console.log(RouteService.routeArray);
    // console.log(RouteService.route.king);
    //console.log(RouteService);
    //console.log(RouteService.routeArr);
}); 