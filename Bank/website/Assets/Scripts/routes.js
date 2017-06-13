App.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    var loginPage = {
        name: 'login',
        url: '/login',
        templateUrl: 'Component/login/login.html'
    };

    var dashboardPage = {
        name: 'dashboard',
        url: '/dashboard',
        templateUrl: 'Component/dashboard/dashboard.html'
    };

    var logout = {
        name: 'logout',
        url: '/logout',
        templateUrl: 'Component/logout/logout.html'
    }

    $stateProvider.state(loginPage);
    $stateProvider.state(dashboardPage);
    $locationProvider.html5Mode(true);
}); 