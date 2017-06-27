var app = angular.module('magazine', []);


app.controller('customers', customerFN);

function customerFN($scope){
    $scope.custList = [
        'adekunle owolabi',
        'king kuta',
        'Indian wife'
    ];
    $scope.cust = null;

    var custSubmit = function () {
        $scope.custList.append($scope.cust);
    }
    //$scope.custSub = 

}