var App = angular.module("App", ['ui.router']);


App.controller("PageTitle", pageTitle);

function pageTitle($scope) {
    $scope.title = "Welcome Page";
};


App.directive('lazy', function () {
    return {
        restrict: 'E',
        scope: false,
        link: function (scope, elem, attr) {
            if (attr.type == 'js') {
                var code = elem.text();
                var f = new Function(code);
                f();
                element.append(f());
            }
        }
    };
});