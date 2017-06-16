///var app = angular.module('App');

angular.module('App').controller("PageTitle", pageTitle);
angular.module('App').controller('Login', login);

function pageTitle($scope) {
    $scope.title = "Login Page";
}

function login($scope) {
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

}
