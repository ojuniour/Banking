var App = angular.module("App", ['ui.router', 'oc.lazyLoad']);
/////////////////////////////////////////////////////////////////////

App.controller("PageTitle", pageTitle);
function pageTitle($scope) {
    $scope.title = "Welcome Page";
};


App.service('RouteService', function () {
    this.routeArray = [];
    this.route = {};

    this.setRoute = function (name, url, tmpl) {
        var routein = {
            name: '',
            url: '',
            tmpl: ''
        };

        this.routeArray.push(routein);
        this.route[name] = { routein };
    }
});


App.controller('loadjs',function (RouteService) {
    //routeFactory.name("this is URL");
   // routeFactory.url("this is URL")
    //routeFactory.controller("this controller");
    RouteService.setRoute("love", 'king', 'jay');
    RouteService.setRoute("Slave", 'queen', 'jack')
    console.log(RouteService.routeArray);
    console.log(RouteService.route.love);
    //console.log(RouteService.arr.route.name);
}); 