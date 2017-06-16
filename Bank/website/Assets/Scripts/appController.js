var App = angular.module("App", ['ui.router', 'oc.lazyLoad']);
/////////////////////////////////////////////////////////////////////

App.controller("PageTitle", pageTitle);
function pageTitle($scope) {
    $scope.title = "Welcome Page";
};





App.provider('routeFactory', function () {
    // var routeArray = {};


    var ret = function () {
        return {
            routeArray: function (name) {
                console.log(name)
            }
        }
    };
       this.$get = ret; 
    
});



App.controller('loadjs', function (routeFactory) {
    routeFactory.routeArray("love");
}); 