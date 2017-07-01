///var app = angular.module('App');

angular.module('App').controller("PageTitle", pageTitle);
angular.module('App').controller('Login', login);

function pageTitle($scope) {
    $scope.title = "Login Page";
}

function login($scope, $http) {
    $scope.username = {
        value: null,
        regex: '[a-zA-Z0-9_.-]{3,20}',
    };

    $scope.password = {
        value: null,
        regex: '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,20}',
    };  

    $scope.pageTitle = 'Welcome now';

    $scope.submit = function (form) {
        console.log($scope.username);
        console.log($scope.password);
        console.log(form);
    }
    $scope.submit = function (form,$scope) {
        console.log(form);
        $http.post('http://localhost:58035/api/customer/login', "{ username: 'love', password: 'king' }")
        .then (function(data){
            console.log(data.data);
        })
    }

}

angular.module('App').controller('PageTitle', function ($scope) {
    //RouteService.setRoute("king");
    //RouteService.setRoute("Slave", 'queen', 'jack', 'love');
    //console.log(RouteService.routeArray);
    // RouteService.setRoute("Boss", 'yay');
    // console.log(RouteService.routeArray);
    // console.log(RouteService.route.king);
    //console.log(RouteService);
    //console.log(RouteService.routeArr);
});
