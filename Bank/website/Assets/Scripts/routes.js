angular.module('App').provider('Provider', function () {
    this.$get = function () {
        var appname = "Lawyer App";
        return {
            appName: appname
        };
    }
});

App.config(function ($stateProvider, $urlRouterProvider, $locationProvider, Provider) {
    $urlRouterProvider.otherwise('*path');

    var roll = [];

    roll = { home: 'home'};
   

   // console.log(roll);
    //console.log(roll[0]);
    var home = {
        name: 'home',
        url: '/',
        controller: 'loadjs',
        reloadOnSearch: true,
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load('Component/home/homeController.js');
            }]
        }
    };

    var loginPage = {
        name: 'login',
        url: '/login',
        controller: 'loadjs',
        templateUrl: 'Component/login/login.html',
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load('Component/login/loginController.js');
            }]
        }
    };


    var dashboardPage = {
        name: 'dashboard',
        url: '/dashboard',
        templateUrl: 'Component/dashboard/dashboard.html',
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load('Component/dashboard/dashboardController.js');
            }]
        }
    };

    var logout = {
        name: 'logout',
        url: '/logout',
        templateUrl: 'Component/logout/logout.html',
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load('Component/logout/logoutController.js');
            }]
        }
    };

    var error_404 = {
        name: 'error_404',
        url: '*path',
        templateUrl: "Component/error/error_404.html",
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load('Component/error/404.js');
            }]
        }
    };

    $stateProvider.state(home);
    $stateProvider.state(loginPage);
    $stateProvider.state(dashboardPage);
    $stateProvider.state(error_404);
    $locationProvider.html5Mode(true);
}); 