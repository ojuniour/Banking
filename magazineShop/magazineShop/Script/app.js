var app = angular.module('magazine', []);


app.controller('customers', customerFN);

function customerFN($scope) {

    $scope.fame = [{
        name: 'Ade',
        id: "500"
    }]

    $scope.res = [3, 4, 5];


    $scope.custList = [{
        name: 'adekunle owolabi',
        sub: [{
            magazine: 'whatever',
            startDate: 'Today',
            endDate: 'Tomoroow',
            rate: '35.99'
        },
        {magazine: 'Innow',
        startDate: 'Today',
        endDate: 'Tomoroow',
        rate: '35.99'}]
    }];

    $scope.magazine = [{
        name: 'Time Magazine',
        rate: '$9.99'
    },
    {
        name: 'The New Yorker',
        rate: '$34.99'
    }];


    $scope.custSubmit = function () {
        var custObj = {
            name: $scope.custName,
            sub: [{
                magazine: $scope.custMagazine == null ? 'No Subscription' : $scope.custMagazine,
                startDate: $scope.custStartDate == null ? 'No Start Date' : $scope.custStartDate,
                endDate: $scope.custEndDate == null ? 'No End Date' : $scope.custEndDate,
                rate: $scope.custRate == null ? 'No Rate' : $scope.custRate
            }]
        }
        $scope.custName == null ? false : $scope.custList.push(custObj);
        $scope.custName = null;
    }

    $scope.custSelected = function () {
        console.log($scope.customers.sub);
       // $scope.sub.push()

    }




    $scope.subscribe = function () {
        var shortDate = function (date) {
            return date.getMonth()+'/'+date.getDate()+'/'+date.getFullYear();
        }
        $scope.newSub = {
            magazine: $scope.mag.name,
            startDate: shortDate($scope.startDate),
            endDate: shortDate($scope.endDate),
            rate: $scope.mag.rate
        }
        $scope.customers.sub.push($scope.newSub);
        console.log($scope.startDate.get)
    }

    $scope.unsubscribe = function (custSub) {
        var index = $scope.customers.sub.indexOf(custSub);
        $scope.customers.sub.splice(index,1)
    }
}